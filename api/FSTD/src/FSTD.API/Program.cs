
using FSTD.API.ApiAttributes;
using FSTD.API.Middlewares;
using FSTD.Infrastructure;
using System.Collections;

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
    LogEnvironmentVariables(builder.Services);
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
void LogEnvironmentVariables(IServiceCollection services)
{
    var serviceProvider = services.BuildServiceProvider();
    var logger = serviceProvider.GetRequiredService<ILogger<Program>>();

    var envVariables = Environment.GetEnvironmentVariables();
    foreach (DictionaryEntry env in envVariables)
    {
        var key = env.Key.ToString();
        var value = env.Value.ToString();

        // Skip sensitive environment variables
        if (key.Contains("PASSWORD", StringComparison.OrdinalIgnoreCase) ||
            key.Contains("SECRET", StringComparison.OrdinalIgnoreCase) ||
            key.Contains("KEY", StringComparison.OrdinalIgnoreCase))
        {
            logger.LogInformation("{Key}=[REDACTED]", key);
        }
        else
        {
            logger.LogInformation("{Key}={Value}", key, value);
        }
    }
}
