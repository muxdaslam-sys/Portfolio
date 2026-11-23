# Portfolio & Master Resume Ecosystem — System Architecture & Context Memory

> **Last Updated**: 2026-11-23  
> **Repository Root**: `d:\Projects\Portfolio`  
> **Primary Technologies**: Semantic HTML5, Tailwind CSS, Vanilla ES6+ JavaScript, Node.js Toolchain  
> **Portfolio Deployment**: GitHub Pages (`https://muxdaslam-sys.github.io/Portfolio/`)  
> **Git Remote**: `https://github.com/muxdaslam-sys/Portfolio.git` (Branch: `main`)  
> **Master Resume Location**: `Resume/Master/` (`Muhammed_Aslam_Resume.html`, `Muhammed_Aslam_Resume.pdf`, `Muhammed_Aslam_Resume_ATS.md`)  
> **Tailored Resumes Location**: `Resume/Tailored/` (Private, gitignored)  
> **Public Downloadable Resume**: `assets/docs/Muhammed_Aslam_Resume.pdf` (Tracked in Git, SHA-256 byte-synced with Master)  
> **Resume Constraints**: Strictly **1 Single Page** | Strictly **0 Em/En Dashes** (`—`, `–`)  
> **Flagship Project 1 (VitalQ)**: Live on Azure Container Apps (`ca-vitalq-web`), Serverless Azure SQL, Redis Cache, Azure Key Vault, App Insights | **66/66 Automated Tests (100% Pass Rate)**  
> **Flagship Project 2 (JobNest)**: Live on Microsoft Azure App Service, ASP.NET MVC 5, Entity Framework 6, Automated CI/CD  
> **Flagship Project 3 (CozaStore)**: Full-Stack E-Commerce & Retail ERP, ASP.NET Web Forms, ADO.NET, MSBuild CI  

---

## 🚨 MANDATORY INVARIANT RULE: AUTOMATIC MEMORY UPDATE

> [!IMPORTANT]
> **CRITICAL WORKSPACE MANDATE — AUTOMATIC TASK COMPLETION SYNC:**  
> Whenever **ANY** task, feature, bug fix, text adjustment, resume customization, or deployment is finished in this repository, **THIS `GEMINI.md` FILE MUST BE AUTOMATICALLY UPDATED** before concluding the agent turn.
>
> Every update to `GEMINI.md` must record:
> 1. **Timestamp & Commit Hash**: Date and short git commit hash.
> 2. **Summary of Changes**: What was modified, added, or removed.
> 3. **Updated Metrics**: Test counts, PDF page counts, file sizes, and verification outcomes.
> 4. **Architectural Consistency**: Ensure project metrics match between the portfolio website, resume, and source repositories.
>
> **NO TASK IS CONSIDERED COMPLETE UNTIL `GEMINI.md` IS UPDATED AND COMMITTED.**

---

## 1. Master Documentation & Directory Index

| Directory / File | Path | Scope & Primary Purpose |
| :--- | :--- | :--- |
| **Project Memory** | [`GEMINI.md`](file:///d:/Projects/Portfolio/GEMINI.md) | Central single source of truth for portfolio architecture, invariants, resume rules, and task history. |
| **Portfolio Frontend** | [`index.html`](file:///d:/Projects/Portfolio/index.html) | Production landing page featuring obsidian cyber aesthetics, project showcases, skills grid, interactive terminal, and recruiter modals. |
| **Interactive Logic** | [`assets/js/main.js`](file:///d:/Projects/Portfolio/assets/js/main.js) | Client-side engine: interactive terminal CLI, command palette (`Ctrl+K`), role matcher, modal controls, and particle constellations. |
| **Tailwind CSS** | [`assets/css/tailwind.min.css`](file:///d:/Projects/Portfolio/assets/css/tailwind.min.css) | Compiled, minified production stylesheet built from [`src/input.css`](file:///d:/Projects/Portfolio/src/input.css) via [`tailwind.config.js`](file:///d:/Projects/Portfolio/tailwind.config.js). |
| **Master Resume HTML** | [`Resume/Master/Muhammed_Aslam_Resume.html`](file:///d:/Projects/Portfolio/Resume/Master/Muhammed_Aslam_Resume.html) | Master 1-page HTML resume template with inline CSS and print media queries. |
| **Master Resume PDF** | [`Resume/Master/Muhammed_Aslam_Resume.pdf`](file:///d:/Projects/Portfolio/Resume/Master/Muhammed_Aslam_Resume.pdf) | Headless Chrome rendered 1-page PDF resume (0 em/en dashes). |
| **Master Resume ATS** | [`Resume/Master/Muhammed_Aslam_Resume_ATS.md`](file:///d:/Projects/Portfolio/Resume/Master/Muhammed_Aslam_Resume_ATS.md) | Clean plain-text ATS Markdown format for online job portals and copy-paste application forms. |
| **Interview Master Guide** | [`Resume/Master/VitalQ_Complete_Interview_Master_Guide.html`](file:///d:/Projects/Portfolio/Resume/Master/VitalQ_Complete_Interview_Master_Guide.html) | Comprehensive technical deep dive and interview preparation guide for the VitalQ architecture. |
| **Tailored Resumes** | [`Resume/Tailored/`](file:///d:/Projects/Portfolio/Resume/Tailored/) | Directory for company-specific, keyword-tailored resume variations. Strictly gitignored. |
| **Public Resume Download** | [`assets/docs/Muhammed_Aslam_Resume.pdf`](file:///d:/Projects/Portfolio/assets/docs/Muhammed_Aslam_Resume.pdf) | Git-tracked public downloadable PDF linked to portfolio download buttons. |

---

## 2. Portfolio Website Architecture & Component Map

The portfolio at [`index.html`](file:///d:/Projects/Portfolio/index.html) is built with a high-performance modular architecture designed for maximum recruiter conversion:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        PORTFOLIO COMPONENT MAP                         │
├────────────────────────────────────────────────────────────────────────┤
│ 1. Navigation Bar     : Sticky glassmorphism header with mobile drawer │
│ 2. Hero Section       : Studio portrait, live availability, quick CTAs │
│ 3. Tech Marquee       : Dual-track infinite hardware-accelerated loop  │
│ 4. Bento Impact Grid  : 4 high-impact engineering telemetry metrics    │
│ 5. Flagship Projects  : Deep dives for VitalQ, JobNest & CozaStore     │
│ 6. System Architecture: Real-time SignalR, RxJS mutex, filtered trees  │
│ 7. Skills Matrix      : 13 category-filtered competencies cards        │
│ 8. Experience Timeline: Professional roles, company impact & education │
│ 9. Recruiter Modal    : 30-second pitch & interactive role matcher     │
│ 10. In-Page Terminal  : CLI emulator supporting 12 real-time commands  │
│ 11. Command Palette   : Ctrl+K quick-search and direct jump navigation │
│ 12. Particle Canvas   : Interactive 60fps constellation background     │
└────────────────────────────────────────────────────────────────────────┘
```

### Key Portfolio Modules Breakdown:
1. **Interactive Recruiter Terminal CLI (`assets/js/main.js`)**:
   * Commands supported: `help`, `notice`, `match`, `vitalq`, `jobnest`, `cozastore`, `skills`, `mongodb`, `experience`, `resume`, `contact`, `clear`.
   * Real-time command history (Up/Down arrow navigation).
   * Direct trigger to download resume upon typing `resume`.
2. **Interactive Role Requirement Matcher**:
   * Dynamic scoring system calculating match percentage based on recruiter checkboxes.
   * Direct links to chat on WhatsApp or send an email.
3. **Command Palette (`Ctrl + K` / `Cmd + K`)**:
   * Instant search modal filtering projects, resume download, tech skills, and contact links.
4. **Performance & Visual Effects**:
   * Interactive 3D Card Tilt with radial mouse spotlight effect (`tilt-element`).
   * 60fps canvas particles connecting with proximity lines to the mouse cursor (`assets/js/particles.js`).
   * Zero external heavy libraries — pure vanilla JavaScript for ultra-fast First Contentful Paint (FCP).

---

## 3. Core Workspace Rules & Quality Invariants

### Rule 1: Strict 1-Page Resume Constraint
* The master resume must **NEVER** spill over onto page 2.
* Printable height is strictly calibrated at `font-size: 8.5pt - 8.9pt`, `line-height: 1.19`, and `margin: 10mm 12mm`.
* Any addition of bullet points or technical descriptions must be balanced by trimming redundant words to preserve the 1-page ceiling.

### Rule 2: Zero Em/En Dash Policy (`—`, `–`)
* To guarantee 100% ATS parser compatibility and prevent rendering corruption across different platforms, **NO em dashes (`—`) or en dashes (`–`) are allowed anywhere in the resume or ATS documents**.
* Always use a standard keyboard hyphen (`-`) surrounded by spaces or clean parentheses.

### Rule 3: Resume Privacy & Git Isolation
* The `Resume/` folder is listed in `.gitignore` to protect internal drafts, master templates, and private company-tailored resumes from public exposure.
* The public download copy at `assets/docs/Muhammed_Aslam_Resume.pdf` is explicitly tracked in Git and must always remain byte-for-byte synced with `Resume/Master/Muhammed_Aslam_Resume.pdf`.

### Rule 4: Headless Chrome PDF Rendering Standard
* Never generate the resume PDF via manual browser "Print to PDF", which can introduce unwanted headers, footers, or margin shifts.
* Always compile using headless Chrome CLI:
  ```powershell
  cmd.exe /c "`"C:\Program Files\Google\Chrome\Application\chrome.exe`" --headless=new --disable-gpu --no-pdf-header-footer --print-to-pdf=`"d:\Projects\Portfolio\Resume\Master\Muhammed_Aslam_Resume.pdf`" `"d:\Projects\Portfolio\Resume\Master\Muhammed_Aslam_Resume.html`""
  ```
* After compiling, verify page count and dash hygiene:
  ```powershell
  node -e "const fs = require('fs'); const buf = fs.readFileSync('Resume/Master/Muhammed_Aslam_Resume.pdf'); const text = buf.toString('latin1'); console.log('Pages:', (text.match(/\/Type\s*\/Page\b/g)||[]).length, 'Dashes:', (text.match(/[\u2013\u2014]/g)||[]).length);"
  ```

### Rule 5: Tailwind CSS Build Workflow
* Whenever new Tailwind utility classes are introduced into `index.html`, rebuild the minified production stylesheet:
  ```powershell
  node "D:\Projects\VitalQ\web\node_modules\tailwindcss\lib\cli.js" -i src/input.css -o assets/css/tailwind.min.css --minify --config tailwind.config.js
  ```

---

## 4. Flagship Projects Architecture & Telemetry

### Project 1: VitalQ (Hospital OPD Priority Queue & CTAS Triage Platform)
* **Stack**: Angular 19 (Signals & OnPush), .NET 8 Web API, SignalR, Entity Framework Core 8, Azure SQL Serverless, Azure Redis.
* **Test Suite**: **66 Automated Tests (53 .NET 8 xUnit + 13 Angular Jasmine | 100% Pass Rate)**.
* **Concurrency & Stress Testing**: 30-worker parallel thread race with 0 collisions; 100K-token SLA benchmark processed in <500ms (~500,000+ evaluations/sec).
* **Cloud Infrastructure (Azure Container Apps)**:
  * Resource Group: `rg-vitalq-prod-centralindia` (Central India / Pune).
  * Environment: `cae-vitalq-prod` backed by Log Analytics (`log-vitalq-prod`).
  * Backend API: `ca-vitalq-api` running on .NET 8 Chiseled runtime.
  * Frontend SPA: `ca-vitalq-web` running on Nginx Alpine (<25MB) with reverse proxying and DNS resolution to `168.63.129.16`.
  * Caching Engine: Internal Container App `ca-vitalq-redis` providing multi-tier L1 Memory + L2 Redis + L3 SQL caching, plus a SignalR scale-out backplane.
  * Cloud Persistence: Serverless Azure SQL Database `sqldb-vitalq-prod` with 23 physical filtered B-Tree indexes delivering <0.5ms seeks.
  * Cloud Security: Zero-Secret Managed Identity (`DefaultAzureCredential`) and Azure Key Vault (`kv-vitalq-prod`).
  * Cloud Observability: Azure Application Insights (`appi-vitalq-prod`) with W3C TraceContext distributed tracing.
* **Live Production Endpoints**:
  * Web Client: `https://ca-vitalq-web.politeisland-88851c55.centralindia.azurecontainerapps.io`
  * API Service: `https://ca-vitalq-api.politeisland-88851c55.centralindia.azurecontainerapps.io`
  * Health Endpoint: `https://ca-vitalq-api.politeisland-88851c55.centralindia.azurecontainerapps.io/health/live`
  * Repository: `https://github.com/muxdaslam-sys/VitalQ`

### Project 2: JobNest (Recruitment & Job Portal Web Application)
* **Stack**: ASP.NET MVC 5, C#, Entity Framework 6, SQL Server, Razor, Bootstrap, JavaScript, AJAX.
* **Cloud & CI/CD**: Deployed to Microsoft Azure App Service with automated GitHub Actions MSBuild pipeline.
* **Key Features**: Split-role authentication (Employer vs. Job Seeker), instant AJAX applicant tracking pipeline (ATS), hardened 5MB candidate resume upload pipeline with MIME inspection and server-side randomized naming.
* **Repository**: `https://github.com/muxdaslam-sys/JobNest`

### Project 3: CozaStore (E-Commerce & Retail ERP Management Suite)
* **Stack**: ASP.NET Web Forms, C#, ADO.NET, Microsoft SQL Server, Bootstrap.
* **CI/CD**: GitHub Actions Windows compilation checks.
* **Key Features**: Customer storefront catalog, dynamic cart & checkout, live administrative operations console, low-stock triggers (<=10 pcs), and direct parameterized ADO.NET queries.
* **Repository**: `https://github.com/muxdaslam-sys/CozaStore`

---

## 5. Tailored Resume Workflow & Registry

When applying for specific roles (e.g., Fintech, Healthcare, Cloud/DevOps, Enterprise SaaS):
1. **Copy Master**: Copy `Resume/Master/Muhammed_Aslam_Resume.html` into `Resume/Tailored/[Target_Company]/Muhammed_Aslam_Resume.html`.
2. **Align Keywords**: Highlight job-specific keywords in the 2-line summary, technical skills table, and project bullets.
3. **Compile PDF**: Run headless Chrome on the tailored HTML to output `Resume/Tailored/[Target_Company]/Muhammed_Aslam_Resume.pdf`.
4. **Verify Constraints**: Ensure the tailored PDF is strictly **1 page** with **0 em/en dashes**.
5. **Git Safety**: Because `Resume/` is in `.gitignore`, tailored resumes remain safely local and unpushed to public GitHub.

### Active Tailored Resume Registry:
* **Captarius (`Resume/Tailored/Captarius/`)**:
  * Role Target: Software Engineer .NET / Full Stack Developer.
  * Files: `Muhammed_Aslam_Resume.html`, `Muhammed_Aslam_Resume.pdf` (103,621 bytes, 1 page, 0 dashes), `Muhammed_Aslam_Resume_ATS.md`.
  * Highlights: Clean Architecture, .NET 8, ASP.NET Core, Angular 19, SQL Server, Docker, Agile/Scrum, and VitalQ 66-test suite.

---

## 6. Changelog & Synchronization History

### 2026-11-23 — Master Resume Deep-Dive, Captarius Tailored Variant & Memory Integration
* **User Master Resume Refinement**: Expanded VitalQ under *Featured Technical Project* to 8 comprehensive engineering bullets detailing Clean Architecture, 23 Filtered B-Trees (<0.5ms seeks), multi-stage Docker builds, CTAS clinical engine, zero-secret Azure Key Vault, Angular 19 Signals, 66 automated tests, Serilog, and Polly retry resiliency.
* **Experience & Education Expansion**: Detailed Agile/Scrum sprint cycles and testing at Luminar Technolab, web modernization metrics at Deccorlook, and relevant BCA coursework.
* **Captarius Tailored Resume Created**: Established `Resume/Tailored/Captarius/` with dedicated HTML, ATS Markdown, and 1-page PDF (103,621 bytes, 0 dashes).
* **Public PDF Synchronization**: Synced master PDF to `assets/docs/Muhammed_Aslam_Resume.pdf` (103,383 bytes, strictly 1 page, 0 dashes, SHA-256 matched).
* **`GEMINI.md` Project Memory Established**: Created permanent single source of truth with the mandatory automatic update rule for all future tasks.
* **Commit `6440ae6`**: Synchronized VitalQ's full 66-test suite (53 xUnit + 13 Jasmine), Azure Key Vault zero-secret managed identity, Application Insights distributed tracing, and L1/L2 Redis distributed cache across the master resume, ATS Markdown, and portfolio website.
* **Commit `58de957`**: Aligned portfolio skills cards, bento metrics, and terminal CLI commands with Azure Container Apps and Docker containerization.
* **Commit `f0f8eb2`**: Shortened professional summary to 2 executive lines, integrated VitalQ Azure cloud architecture, restructured internal `Resume/` workspace into `Master/` and `Tailored/`, and added `Resume/` to `.gitignore`.
* **Cleanup**: Deleted external redundant `D:\Projects\Resume` directory after migrating all master documents into `d:\Projects\Portfolio\Resume\Master\`.
