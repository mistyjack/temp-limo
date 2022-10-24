import { WrapperComponent } from "@lib/types/Common.types";
import { Router } from "next/router";
import { FC, useEffect, useState } from "react";

const RouteChangeWrapper: FC<WrapperComponent> = ({children}) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Router.events.on("routeChangeStart", (url) => {
      setLoading(true);
      document.body.style.overflow = "hidden";
      window.scrollTo(0,0);
    });

    Router.events.on("routeChangeComplete", (url) => {
      setLoading(false);
      document.body.style.overflow = "unset";
    });

    Router.events.on("routeChangeError", (url) => {
      setLoading(false);
      document.body.style.overflow = "unset";
    });
  }, [Router]);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Loading
      </div>
    );
  }

  return <>{children}</>
}

export default RouteChangeWrapper;