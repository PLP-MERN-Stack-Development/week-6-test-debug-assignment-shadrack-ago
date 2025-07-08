import React from 'react';

// Error Boundary for catching errors in child components
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, info) {
    // Log error details for debugging
    console.error("ErrorBoundary caught an error:", error, info);
  }
  render() {
    if (this.state.hasError) {
      return <div role="alert">Something went wrong: {this.state.error.message}</div>;
    }
    return this.props.children;
  }
}

// Button component with debugging
const Button = ({ children, onClick, variant = "primary", ...props }) => {
  // Debug: Log props to trace issues
  console.log("Button props:", { children, onClick, variant, ...props });

  // Simulate a bug for demonstration
  // Uncomment to test error boundary:
  // if (children === "Crash") throw new Error("Button crashed!");

  return (
    <button
      className={`btn btn-${variant}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

// Usage example with ErrorBoundary
export default function ButtonWithBoundary(props) {
  return (
    <ErrorBoundary>
      <Button {...props} />
    </ErrorBoundary>
  );
} 