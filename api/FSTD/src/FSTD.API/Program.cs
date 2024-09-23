
using FSTD.API.ApiAttributes;
using FSTD.API.Middlewares;
using FSTD.Infrastructure;

var app = CreateWebApplicationBuilder().Build();
app.UseMiddleware<RequestLoggingMiddleware>();
app.UseMiddleware<ExceptionHandlingMiddleware>();

if (app.Environment.IsDevelopment())
{
    // In development mode, allow all origins, headers, and methods
    app.UseCors(builder =>
        builder.AllowAnyOrigin()
               .AllowAnyHeader()
               .AllowAnyMethod());

    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "FSTD API V1");
        app.InitializeDatabase(); // Ensure database is initialized in development
    });
}
else
{
    // In other environments, use the configured allowed origins
    var allowedOrigins = app.Configuration.GetSection("Cors:AllowedOrigins").Get<string[]>() ?? [];
    app.UseCors(builder =>
        builder.WithOrigins(allowedOrigins)
               .AllowAnyMethod()
               .AllowAnyHeader());
}
app.UseRouting();
app.UseHttpsRedirection();
app.UseAuthentication();
app.UseAuthorization();

app.UseEndpoints(options =>
{
    options.MapControllers();
    options.MapDefaultControllerRoute();
});

app.Run();

WebApplicationBuilder CreateWebApplicationBuilder()
{
    var builder = WebApplication.CreateBuilder(args);
    Logging(builder);
    LogConfiguration(builder.Configuration, builder.Services);
    Services(builder);
    Configuration(builder);

    return builder;
}

void Configuration(WebApplicationBuilder builder)
{
    builder.Services.AddInfrastructure(builder.Configuration);
    // Additional configuration if needed
}

void Logging(WebApplicationBuilder builder)
{
    builder.Logging
        .ClearProviders()
        .AddConsole();
}

void Services(WebApplicationBuilder builder)
{
    builder.Services.AddScoped<ApiKeyAuthAttribute>();
}
void LogConfiguration(IConfiguration configuration, IServiceCollection services)
{
    var serviceProvider = services.BuildServiceProvider();
    var logger = serviceProvider.GetRequiredService<ILogger<Program>>();

    // Enumerate all configuration keys and values
    foreach (var kvp in configuration.AsEnumerable())
    {
        var key = kvp.Key;
        var value = kvp.Value;

        // Skip sensitive configuration keys
        if (key.Contains("Password", StringComparison.OrdinalIgnoreCase) ||
            key.Contains("Secret", StringComparison.OrdinalIgnoreCase) ||
            key.Contains("Key", StringComparison.OrdinalIgnoreCase))
        {
            logger.LogInformation("{Key}=[REDACTED]", key);
        }
        else
        {
            logger.LogInformation("{Key}={Value}", key, value);
        }
    }
}
