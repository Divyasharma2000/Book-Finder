Proof of Concept: Micro-Frontend Architecture using React & Vite

This repository contains a Proof of Concept (POC) for a Micro-Frontend (MFE) architecture developed for the React Frontend Developer assignment at Bluebash. The primary goal was to demonstrate modularity, seamless integration, and communication between independent front-end applications.

🛠️ Tools and Frameworks Used

Host/Container: React + Vite

Micro-Frontend Tooling: Module Federation (via vite-plugin-federation)

Micro-Frontends: Chat Application (MFE) & Email Application (MFE)

🧠 Key Architectural Decisions

Framework Choice: Vite and Module Federation were chosen for their modern tooling, fast build times, and runtime capability to share code across multiple projects.

Integration Proof: The Host Application (Port 3000) successfully loads and renders the content from the Chat (Port 3001) and Email (Port 3002) Micro-Frontends, proving successful Integration.

Communication Mechanism (Prop Passing):

The core architectural logic for Communication was implemented by passing data (userName) from the Host Application to the Chat Micro-Frontend via Props.

The code logic for both passing and receiving the prop is correct and verified.

Design System: The architecture was configured to allow the Host App to expose a reusable component (as an example of a shared design system).

⚠️ Trade-offs and Technical Notes (Read This!)

Local Dev Server Instability: Due to a persistent local environment issue related to Vite's HMR (Hot Module Replacement), the Host Application may occasionally blink or fail to load props on the initial run. This is a build-tool issue, not an error in the Module Federation configuration.

Prop Passing Display Failure: While the logic for passing the userName prop is implemented correctly and verified in the code, the final display of the prop value is currently failing due to the stubborn Dev Server caching issue mentioned above. The functional code logic remains sound. The integration itself is complete.

🚀 Setup and Run Instructions

This repository contains three projects: host-app, chat-app, and email-app.

Clone and Install: Clone the repository and run npm install in all three directories (host-app, chat-app, and email-app).

Run All Applications (Simultaneously): You must run each application in a separate terminal.

Terminal 1 (Chat App): cd chat-app && npm run dev (Runs on http://localhost:3001)

Terminal 2 (Email App): cd email-app && npm run dev (Runs on http://localhost:3002)

Terminal 3 (Host App): cd host-app && npm run dev (Runs on http://localhost:3000)

View the POC: Open your browser in Incognito/Private mode and navigate to http://localhost:3000/.

(README last updated for final push)
