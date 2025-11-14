import Image from 'next/image';

export default function Home() {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <Image src="/acsetraLogo.png" alt="Acsetra Logo" width={150} height={60} className="header-logo" />
        <h1>Project Overview</h1>
        <Image src="/image.png" alt="Supermicro Logo" width={150} height={60} className="header-logo" />
      </header>

      {/* Feature 1: Teams */}
      <section className="feature-section">
        <div className="feature-header">
          <div className="feature-title">1. Teams & Access Control</div>
        </div>
        <div className="feature-content">
          <div className="feature-text">
            <div className="what-it-does">
              <h3>What teams are</h3>
              <p>Teams let you group users (e.g., Project Manager, Onsite Deployment) and control what each group can do in each project. Permissions are set with roles: Admin, Editor, Viewer, Commenter.</p>
            </div>
            <div className="how-to-use">
              <h3>How to create a team</h3>
              <ol className="steps">
                <li>In the left sidebar, click Teams.</li>
                <li>Click New Team.</li>
                <li>Give the team a clear name and a description explaining what that team does.</li>
                <li>Save.</li>
                <li>Add members to the team and assign a user the admin role before continuing. You may not continue without assigning a user admin.</li>
              </ol>
            </div>
            <div className="how-to-use">
              <h3>How to connect teams to a project</h3>
              <ol className="steps">
                <li>Go to Projects in the left sidebar.</li>
                <li>Click the New Project tile, name the project, and create it.</li>
                <li>On the Projects page, find that project card.</li>
                <li>Click Share on the project card to open Team Controls.</li>
                <li>Tick the box next to each team that should have access.</li>
                <li>For each selected team, use the dropdown to choose a role:
                  <ul>
                    <li>Admin – manage access and settings, update files.</li>
                    <li>Editor – upload and update files.</li>
                    <li>Viewer – see files and AI outputs; cannot upload.</li>
                    <li>Commenter – (if used) add comments without changing files.</li>
                  </ul>
                </li>
                <li>Click Next / Save to apply.</li>
              </ol>
            </div>
            <div className="how-to-use future-box">
              <h3>How this will be expanded</h3>
              <p>Team/role presets so you can apply a standard access pattern to new projects with one selection.</p>
            </div>
          </div>
          <div className="feature-image">
            <Image src="/TEAM 1.png" alt="Team Management" width={500} height={300} />
            <Image src="/TEAM 2.png" alt="Team Creation" width={500} height={300} />
            <Image src="/Share1.png" alt="Share Project" width={500} height={300} />
            <Image src="/Share2.png" alt="Team Selection" width={500} height={300} />
          </div>
        </div>
      </section>

      {/* Feature 2: File Uploading */}
      <section className="feature-section">
        <div className="feature-header">
          <div className="feature-title">2. File Uploading</div>
        </div>
        <div className="feature-content">
          <div className="feature-text">
            <div className="what-it-does">
              <h3>What this does</h3>
              <p>Uploads SOWs and supporting documents into the project so they're organized for your team and processed by our document intelligence.</p>
            </div>
            <div className="how-to-use">
              <h3>Where files live</h3>
              <p><strong>Hub tab (left)</strong></p>
              <ol className="steps">
                <li>Shows the SOW upload card, where you can click and upload your SOW</li>
                <li>Shows the three most recently opened files for quick access.</li>
              </ol>
              <p><strong>All tab (right)</strong></p>
              <ol className="steps">
                <li>Shows all files for the project in a table.</li>
                <li>Files are organized by team, can find latest revisions, download, upload, or delete files depending on your role</li>
              </ol>
            </div>
            <div className="how-to-use">
              <h3>How to upload files</h3>
              <ol className="steps">
                <li>Open the project from the Projects page.</li>
                <li>On top of the page, select the Hub tab.</li>
                <li>To upload the SOW:
                  <ul>
                    <li>Click inside the Click to Upload SOW card.</li>
                  </ul>
                </li>
                <li>To upload other documents:
                  <ul>
                    <li>Click the Upload Files button.</li>
                  </ul>
                </li>
                <li>Switch to the All tab to confirm that:
                  <ul>
                    <li>Files appear in the table, and</li>
                    <li>Each file shows which team uploaded it.</li>
                  </ul>
                </li>
                <li>Use Filter by Team to show only files from a specific team.</li>
              </ol>
            </div>
            <div className="how-to-use future-box">
              <h3>How this will be expanded</h3>
              <p>Automatic linking of uploaded files into cross-file validation to flag missing or inconsistent details across SOWs, BOMs, and deployment plans.</p>
            </div>
          </div>
          <div className="feature-image">
            <Image src="/Hub1.png" alt="Hub Tab" width={500} height={300} />
            <Image src="/Hub2.png" alt="All Files Tab" width={500} height={300} />
          </div>
        </div>
      </section>

      {/* Feature 3: File Updating */}
      <section className="feature-section">
        <div className="feature-header">
          <div className="feature-title">3. File Updating</div>
        </div>
        <div className="feature-content">
          <div className="feature-text">
            <div className="what-it-does">
              <h3>What this does</h3>
              <p>When a file changes, you can replace it with a new version. The system keeps track of creation date, last updated, and a revision number so you can see the history.</p>
            </div>
            <div className="how-to-use">
              <h3>How to update a file</h3>
              <ol className="steps">
                <li>Inside a project, go to the All tab to see the file table.</li>
                <li>In the Actions column, click Update next to the file you have a new version of.</li>
                <li>Choose the new version from your computer and see that there is now 2 revisions numbered.</li>
              </ol>
            </div>
            <div className="how-to-use">
              <h3>How revisions get created</h3>
              <p>A new revision is created in two ways:</p>
              <ol className="steps">
                <li>You click Update on an existing file and upload a replacement.</li>
                <li>You upload a file with a similar name (for example, same base filename, different suffix). The system will detect this and ask you:
                  <ul>
                    <li>Accept – treat it as a new revision of the existing file.</li>
                    <li>Skip – keep it as a separate file.</li>
                    <li>Delete/Cancel – stop the upload if it was a mistake.</li>
                  </ul>
                </li>
              </ol>
            </div>
            <div className="how-to-use">
              <h3>What you see from revisions</h3>
              <p>Once a new revision exists, you can open the Revision Summary for that file and see:</p>
              <ol className="steps">
                <li>A Summary describing what changed between versions.</li>
                <li>A Key Changes list calling out major edits (for example, changes to requirements, acceptance criteria, or formatting).</li>
              </ol>
            </div>
            <div className="how-to-use future-box">
              <h3>How this will be expanded</h3>
              <p>Better handling of merge conflicts when two versions diverge. Quick links from each key change directly to the matching spot in the document.</p>
            </div>
          </div>
          <div className="feature-image">
            <Image src="/Upload 1.png" alt="File Table Update" width={500} height={300} />
            <Image src="/upload 2.png" alt="Upload New Version" width={500} height={300} />
            <Image src="/upload 4.png" alt="Revision Summary" width={500} height={300} />
            <Image src="/upload3.png" alt="Revision Detection" width={500} height={300} />
          </div>
        </div>
      </section>

      {/* Feature 4: Guide Agent */}
      <section className="feature-section">
        <div className="feature-header">
          <div className="feature-title">4. Guide Agent Chat</div>
        </div>
        <div className="feature-content">
          <div className="feature-text">
            <div className="what-it-does">
              <h3>What it does right now</h3>
              <p>Guide is a fact surfacer. For a given project, it looks at the uploaded documents and pulls out relevant facts and citations that match your question.</p>
              <ol className="steps">
                <li>It does not currently "reason" about the project or give opinions.</li>
                <li>It does not hold a conversation or support follow-up context yet.</li>
                <li>Each question is treated on its own.</li>
                <li>This keeps behavior safer and more predictable for early use.</li>
              </ol>
            </div>
            <div className="how-to-use">
              <h3>How to use Guide today</h3>
              <ol className="steps">
                <li>Make sure the project has key documents uploaded (SOW, BOM, playbook, etc.).</li>
                <li>Look at the right-hand panel labeled Guide. Click in the Ask a question… box.</li>
                <li>Type a fact-style question (for example:
                  <ul>
                    <li>"List the racks mentioned in this project."</li>
                    <li>"What power density is specified?"</li>
                  </ul>
                </li>
                <li>Click Send.</li>
                <li>Guide responds with facts pulled from the documents plus citations (file name, tab, or page).</li>
                <li>Treat this like an advanced finder, not a narrative explanation.</li>
              </ol>
            </div>
            <div className="how-to-use future-box">
              <h3>How will this be expanded</h3>
              <p>More agentic behavior: follow-up questions, chained reasoning, and "explain this to me" style answers. Ability to keep conversational context within a project. Clickable citations that open the underlying file exactly where the fact was found.</p>
            </div>
          </div>
          <div className="feature-image">
            <Image src="/Guide 1.png" alt="Guide Panel" width={500} height={400} className="cropped" />
            <Image src="/Guide2.png" alt="Ask Question" width={500} height={400} className="cropped" />
            <Image src="/Guide3.png" alt="Guide Response" width={500} height={300} />
          </div>
        </div>
      </section>

      {/* Feature 5: SOW Review */}
      <section className="feature-section">
        <div className="feature-header">
          <div className="feature-title">5. SOW Review</div>
        </div>
        <div className="feature-content">
          <div className="feature-text">
            <div className="what-it-does">
              <h3>What it does right now</h3>
              <p>The SOW area gives you:</p>
              <ol className="steps">
                <li>A dedicated place to upload the SOW for each project.</li>
                <li>Integration with file revisions so you can see how one SOW draft changed to the next via the Revision Summary tool.</li>
                <li>The SOW automatically goes through document intelligence, and the system creates a list of flags (e.g., scope gaps, risky language, missing pieces)</li>
              </ol>
            </div>
            <div className="how-to-use">
              <h3>How to use the SOW area</h3>
              <ol className="steps">
                <li>In the project Hub, go to the Statement of Work section.</li>
                <li>Click to Upload SOW and select your SOW file.</li>
                <li>Let the document processing finish, you can see the comments that were generated, and also download the document, where you will find comments and direct citations.</li>
              </ol>
            </div>
            <div className="how-to-use future-box">
              <h3>How this will be expanded</h3>
              <p>A SOW-specific mode in Guide that explains clauses, flags risk, and suggests language (once we move past the current fact-only behavior). Severity-ranked flags and checks for missing attachments linked to SOW sections.</p>
            </div>
          </div>
          <div className="feature-image">
            <Image src="/SOW1.png" alt="SOW Upload" width={500} height={300} />
            <Image src="/SOW2.png" alt="SOW Analysis" width={500} height={300} />
          </div>
        </div>
      </section>
    </div>
  );
}
