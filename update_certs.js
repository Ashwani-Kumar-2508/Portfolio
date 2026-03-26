const fs = require('fs');
const path = require('path');

const data = [
    ["Angular and next js", "https://drive.google.com/file/d/1p_Op9rwHJ07hv5bJNhK527OGCOnD0b7y/view?usp=sharing"],
    ["Cloud Computing NPTEL", "https://drive.google.com/file/d/18N8g3G170rcR0zIDslx63e0ITii_iYWh/view?usp=sharing"],
    ["Coursera Bits and Bytes", "https://drive.google.com/file/d/1TlJ_MY5zMi2Ot8JSC4lvw62iFnPJDwhf/view?usp=sharing"],
    ["Coursera Digital System", "https://drive.google.com/file/d/1sI3MSTspCRegSv0mhQp_6KWy2wzkFy0y/view?usp=sharing"],
    ["Coursera Fundamental Network", "https://drive.google.com/file/d/1L0Dhya0uhyA_z5QbxLm5pY57U1pzV_Ok/view?usp=sharing"],
    ["Coursera Hardware and operating System", "https://drive.google.com/file/d/1CkJMVIybGk2saVvC6nhaydiLvsJH2sCe/view?usp=sharing"],
    ["DataStructure", "https://drive.google.com/file/d/19QUBt_DTv322HzBcwHJRHJnSa9CTSAM9/view?usp=sharing"],
    ["Generative AI apps", "https://drive.google.com/file/d/1J66udBwJjZN812joiemM-SSuF5tBvqMQ/view?usp=sharing"],
    ["Infosys Build Generative AI", "https://drive.google.com/file/d/1boAwhUSxVR14liydtqdVXYm4p6am_Meu/view?usp=sharing"],
    ["Infosys Computational Theory", "https://drive.google.com/file/d/12YMmgYUS_L-JoDtdKSJ8bOu6wRKETItr/view?usp=sharing"],
    ["Java", "https://drive.google.com/file/d/1_cSvXLl42zaGhjcTsFX1yNYk1D_ReOkF/view?usp=sharing"],
    ["MongoDB", "https://drive.google.com/file/d/1v_QTtPcVk9K46KP7arv3xWwRVmgCTCHn/view?usp=sharing"],
    ["Object Oriented Programming", "https://drive.google.com/file/d/1PZUFKTqlwPhpmP51JJnCclyuK0UoId_8/view?usp=sharing"],
    ["Responsive Web Page Bootstrap", "https://drive.google.com/file/d/18CYZwlYt7NjETU_Rdj3vHBc2NYL4vlaz/view?usp=sharing"],
    ["Schema Design and Pattern", "https://drive.google.com/file/d/1ySEDMuKwQik6YP_AkLqPZCGXIGKAAbtq/view?usp=sharing"],
    ["Udemy Gen AI", "https://drive.google.com/file/d/1lZXNI6zaB8vHwZKkkXONF4d-z3wYpUAD/view?usp=sharing"]
];

const colors = ["text-primary", "text-secondary", "text-info", "text-warning", "text-success", "text-danger"];
const icons = ["fas fa-certificate", "fas fa-award", "fas fa-medal", "fas fa-star", "fas fa-graduation-cap"];

const htmlChunks = data.map(([name, link], i) => {
    const color = colors[i % colors.length];
    const icon = icons[i % icons.length];
    const delay = ((i % 3) + 1) * 100;

    return `                <!-- Certificate ${i + 1} -->
                <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="${delay}">
                    <div class="glass-card p-4 text-center h-100">
                        <i class="${icon} display-4 mb-3 ${color}"></i>
                        <h5 class="fw-bold text-white mb-3">${name}</h5>
                        <p class="small text-muted mb-4">Certification validating expertise and understanding of ${name} concepts.</p>
                        <a href="${link}" target="_blank" class="btn btn-outline-custom w-100">View Certificate</a>
                    </div>
                </div>`;
});

const replacement = htmlChunks.join('\n');
const filePath = path.join(__dirname, 'index.html');

let content = fs.readFileSync(filePath, 'utf-8');

// Regex targeting the entire certificates inner grid up to the section closing
const regex = /                <!-- Certificate 1 -->[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/;

if (regex.test(content)) {
    const updatedContent = content.replace(regex, replacement + "\n            </div>\n        </div>\n    </section>");
    fs.writeFileSync(filePath, updatedContent, 'utf-8');
    console.log('Successfully removed heavier certificates using JS.');
} else {
    console.log('Regex did not match.');
}
