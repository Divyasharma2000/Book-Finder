import React, { Suspense, useState } from "react";

const ChatApp = React.lazy(() => import("chat/ChatApp"));
const EmailApp = React.lazy(() => import("email/EmailApp"));

function App() {
  const [userName] = useState("Divya Sharma (from Host)");

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <header style={{ borderBottom: "2px solid #333", paddingBottom: "10px" }}>
        <h1>🏡 Main Host Application (Port 3000)</h1>
        <p>Micro-Frontends integrated below using Module Federation:</p>
      </header>
      <main style={{ marginTop: "30px" }}>
        {/* Chat App Load */}
        <Suspense
          fallback={
            <div style={{ padding: "15px", border: "1px dashed gray" }}>
              Loading Chat Application...
            </div>
          }
        >
          <ChatApp userName={userName} />
        </Suspense>
        {/* Email App Load */}
        <Suspense
          fallback={
            <div style={{ padding: "15px", border: "1px dashed gray" }}>
              Loading Email Application...
            </div>
          }
        >
          <EmailApp />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
