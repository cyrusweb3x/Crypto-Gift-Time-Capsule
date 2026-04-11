// app/capsules/error.tsx
"use client";

import { useEffect, useState } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [details, setDetails] = useState({
    name: "",
    message: "",
    stack: "",
    digest: "",
  });

  useEffect(() => {
    console.error("FULL ERROR OBJECT:", error);
    console.error("ERROR NAME:", error?.name);
    console.error("ERROR MESSAGE:", error?.message);
    console.error("ERROR STACK:", error?.stack);

    setDetails({
      name: error?.name || "undefined",
      message: error?.message || "undefined",
      stack: error?.stack || "undefined",
      digest: error?.digest || "undefined",
    });
  }, [error]);

  return (
    <div style={{ 
      minHeight: "100vh", 
      background: "#fff", 
      padding: "20px",
      fontFamily: "monospace"
    }}>
      <h1 style={{ color: "red", fontSize: "20px", marginBottom: "20px" }}>
        DEBUG ERROR PAGE
      </h1>

      <div style={{ 
        background: "#fee2e2", 
        border: "1px solid red", 
        borderRadius: "8px", 
        padding: "16px",
        marginBottom: "12px"
      }}>
        <strong>Error Name:</strong>
        <div style={{ 
          background: "white", 
          padding: "8px", 
          marginTop: "4px",
          wordBreak: "break-all",
          minHeight: "30px"
        }}>
          {details.name}
        </div>
      </div>

      <div style={{ 
        background: "#fee2e2", 
        border: "1px solid red", 
        borderRadius: "8px", 
        padding: "16px",
        marginBottom: "12px"
      }}>
        <strong>Error Message:</strong>
        <div style={{ 
          background: "white", 
          padding: "8px", 
          marginTop: "4px",
          wordBreak: "break-all",
          minHeight: "30px"
        }}>
          {details.message}
        </div>
      </div>

      <div style={{ 
        background: "#fee2e2", 
        border: "1px solid red", 
        borderRadius: "8px", 
        padding: "16px",
        marginBottom: "12px"
      }}>
        <strong>Digest:</strong>
        <div style={{ 
          background: "white", 
          padding: "8px", 
          marginTop: "4px",
          wordBreak: "break-all",
          minHeight: "30px"
        }}>
          {details.digest}
        </div>
      </div>

      <div style={{ 
        background: "#fee2e2", 
        border: "1px solid red", 
        borderRadius: "8px", 
        padding: "16px",
        marginBottom: "20px"
      }}>
        <strong>Stack Trace:</strong>
        <pre style={{ 
          background: "white", 
          padding: "8px", 
          marginTop: "4px",
          wordBreak: "break-all",
          whiteSpace: "pre-wrap",
          fontSize: "11px",
          maxHeight: "300px",
          overflow: "auto",
          minHeight: "50px"
        }}>
          {details.stack}
        </pre>
      </div>

      <button
        onClick={reset}
        style={{
          width: "100%",
          background: "red",
          color: "white",
          padding: "12px",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >
        Try Again
      </button>
    </div>
  );
}