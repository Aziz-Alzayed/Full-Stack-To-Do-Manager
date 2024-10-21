import { Button, Spin } from "antd";
import { ComponentType, FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth-provider/auth-provider";
import { isAdmin, isSuper } from "../auth-services/auth-service";
import { RoutePaths, useLanguageAwareNavigate } from "../../routing/use-language-aware-navigate ";


const AdminRoleComponent = <P extends object>(
  WrappedComponent: ComponentType<P>
): FC<P> => {
  const WithAdminCheck: FC<P> = (props) => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const [loading, setLoading] = useState(true); // Loading state for role check
    const [error, setError] = useState<string | undefined>(undefined);
    const navigateWithLanguage = useLanguageAwareNavigate();
    useEffect(() => {
      const checkRoles = async () => {
        try {
          if (!user) {
            // If user is not authenticated, redirect immediately
            navigateWithLanguage(RoutePaths.unauthorized);
            return;
          }

          // Check if user is an admin or super user
          const isAllowed = (await isAdmin()) || (await isSuper());
          if (!isAllowed) {
            navigateWithLanguage(RoutePaths.unauthorized); // Redirect if not authorized
          }
        } catch (err) {
          console.error(err);
          setError("An error occurred while checking user roles.");
        } finally {
          setLoading(false); // Role check completed
        }
      };

      checkRoles();
    }, [navigate, user]);

    if (loading) {
      return (
        <div style={{ textAlign: "center", paddingTop: "50px" }}>
          <Spin tip="Loading..." /> {/* Show loading spinner */}
        </div>
      );
    }

    if (error) {
      return (
        <div>
          <p>An error occurred. Please try again later.</p>
          <Button onClick={() => navigate(-1)}>Go Back</Button>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };

  return WithAdminCheck;
};

export default AdminRoleComponent;
