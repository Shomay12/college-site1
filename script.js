/**
 * Club Commite - Logic Stability (V6.1)
 * Only 3 Core Clubs: Cascade, Networking, Programming
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. LEADERSHIP DATA
    const leadershipData = [
        { 
            id: 1,
            name: "Prof.(Dr) Rekha Agarwal", 
            role: "Director, AIIT", 
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
            bio: "A visionary academician with over 25 years of experience in technical education and research. Under her leadership, AIIT has achieved significant milestones in institutional growth and research excellence.",
            achievements: ["PhD in Computer Science", "Senior IEEE Member", "Institutional Excellence Award 2024"]
        },
        { 
            id: 2,
            name: "Prof.(Dr.) Laxmi Ahuja", 
            role: "Chief Coordinator", 
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
            bio: "Strategic coordinator focusing on student affairs and academic rigor. She manages the institutional fests and ensures seamless coordination between various technical clubs.",
            achievements: ["Award for Academic Leadership", "Author of 50+ Research Papers"]
        },
        { 
            id: 3,
            name: "Mr. Priyaank Sinha", 
            role: "Student Chief Coordinator", 
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
            bio: "An innovative student leader bridging the gap between student aspirations and institutional goals. He orchestrates the student body for major technical summits.",
            achievements: ["Presidential Citation for Leadership", "Top 1% Student Rank"]
        }
    ];

    const placeholderLeaders = [
        { name: "New Executive", role: "Coordinator", image: "https://ui-avatars.com/api/?name=Executive&background=F4B400&color=0054A6" },
        { name: "New Lead", role: "Joint Lead", image: "https://ui-avatars.com/api/?name=Lead&background=F4B400&color=0054A6" }
    ];

    // 2. FILTERED CLUB DATA (ONLY 3 CLUBS)
    const clubsData = [
        {
            id: 1,
            name: "Cascade Club",
            category: "Management & Tech",
            description: "The strategic central body of AIIT, managing institutional fests and inter-club coordination.",
            image: "tech.png",
            faculty: "Prof. (Dr.) Rekha Agarwal",
            leads: "Mr. Priyaank Sinha",
            mission: "Bridging technical academic excellence and professional leadership.",
            fullDetails: "Cascade Club is the primary student body of AIIT. It orchestrates major technical fests, seminars, and networking events, ensuring that every student develops high-level management skills."
        },
        {
            id: 2,
            name: "Programming Club",
            category: "Technical",
            description: "A precision society for mastering competitive programming and algorithmic rigor.",
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
            faculty: "Dr. Sapna Sinha",
            leads: "Saurabh (President)",
            mission: "Developing logical excellence.",
            fullDetails: "Preparing students for international coding competitions and high-stakes technical interviews."
        },
        {
            id: 3,
            name: "Networking Club",
            category: "Technical",
            description: "Mastering the architectures of the digital age, from routing to security.",
            image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800",
            faculty: "Ms. Ruchika Bathla",
            leads: "Mudit (President)",
            mission: "Building robust networks.",
            fullDetails: "Hands-on exposure to network protocols and cybersecurity architectures."
        }
    ];

    // 3. RENDERING
    const clubsGrid = document.getElementById('clubsGrid');
    const leadershipGrid = document.getElementById('leadershipGrid');

    function renderClubs(data) {
        if (!clubsGrid) return;
        clubsGrid.innerHTML = '';
        data.forEach(club => {
            const card = document.createElement('div');
            card.className = 'club-card';
            card.innerHTML = `
                <div class="club-img" style="background-image: url('${club.image}')">
                    <span class="category-tag">${club.category}</span>
                </div>
                <div class="club-content">
                    <h3>${club.name}</h3>
                    <p>${club.description}</p>
                    <button class="btn btn-primary" style="margin-top: auto; padding: 0.6rem 1rem; font-size: 0.75rem;" onclick="openClubDetail(${club.id})">Details</button>
                </div>
            `;
            clubsGrid.appendChild(card);
        });
    }

    function renderLeadership() {
        const leadershipContainer = document.getElementById('leadershipPodium');
        if (!leadershipContainer) return;
        
        // 5-Slot Hierarchy (Side, Mid, Top, Mid, Side)
        const podiumOrder = [
            { ...placeholderLeaders[0], type: 'podium-side' }, 
            { ...leadershipData[1], type: 'podium-mid' }, 
            { ...leadershipData[0], type: 'podium-top' }, 
            { ...leadershipData[2], type: 'podium-mid' }, 
            { ...placeholderLeaders[1], type: 'podium-side' }
        ];

        leadershipContainer.innerHTML = '';
        podiumOrder.forEach((member, index) => {
            const item = document.createElement('div');
            item.className = `podium-item ${member.type}`;
            item.innerHTML = `
                <img src="${member.image}" class="leader-img">
                <h4 class="leader-name">${member.name}</h4>
                <p class="leader-role">${member.role}</p>
            `;
            item.onclick = () => showLeaderDetail(member);
            leadershipContainer.appendChild(item);
        });

        // Show Director's details by default
        showLeaderDetail(leadershipData[0]);
    }

    function showLeaderDetail(member) {
        const pane = document.getElementById('leadershipDetailPane');
        if (!member.bio) {
            pane.classList.remove('active');
            return;
        }

        pane.innerHTML = `
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 4rem; align-items: center;">
                <div style="text-align: center;">
                    <img src="${member.image}" style="width: 220px; height: 220px; border-radius: 50%; border: 6px solid var(--brand-gold); box-shadow: 0 20px 40px rgba(0,0,0,0.1);">
                    <h3 style="margin-top: 2rem; color: var(--brand-blue);">${member.name}</h3>
                    <p class="leader-role" style="color: var(--text-muted);">${member.role}</p>
                </div>
                <div>
                    <span class="section-label" style="color: var(--brand-blue); font-size: 0.7rem;">Institutional Profile</span>
                    <p style="font-size: 1.15rem; line-height: 1.8; color: var(--text-dark); margin: 2rem 0;">${member.bio}</p>
                    <div style="display: flex; flex-wrap: wrap; gap: 1rem;">
                        ${member.achievements.map(a => `<span style="background: var(--brand-gray); padding: 0.5rem 1rem; border-radius: 4px; font-size: 0.8rem; font-weight: 700; color: var(--brand-blue); border: 1px solid #E2E8F0;">${a}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
        pane.classList.add('active');
    }

    // 4. INTERACTIONS
    window.openClubDetail = (id) => {
        const club = clubsData.find(c => c.id === id);
        const modal = document.getElementById('clubModal');
        const modalBody = document.getElementById('modalBody');
        modalBody.innerHTML = `
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));">
                <div style="background: var(--brand-blue); padding: 3rem; text-align: center; color: white;">
                    <img src="${club.image}" style="width: 100%; border-radius: 8px; border: 4px solid var(--brand-gold); margin-bottom: 2rem;">
                    <h2>${club.name}</h2>
                </div>
                <div style="padding: 3rem;">
                    <h4 style="color: var(--brand-gold); text-transform: uppercase; font-size: 0.8rem; margin-bottom: 1rem;">The Mission</h4>
                    <p style="font-size: 1.25rem; font-weight: 700; color: var(--brand-blue); line-height: 1.4; margin-bottom: 2rem;">${club.mission}</p>
                    <p style="color: var(--text-muted); line-height: 1.8;">${club.fullDetails}</p>
                    <div style="margin-top: 3rem; display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; border-top: 1px solid #EEE; padding-top: 2rem;">
                        <div>
                            <span style="font-size: 0.7rem; font-weight: 800; color: var(--text-muted); text-transform: uppercase;">Faculty</span>
                            <p style="font-weight: 700; color: var(--brand-blue);">${club.faculty}</p>
                        </div>
                        <div>
                            <span style="font-size: 0.7rem; font-weight: 800; color: var(--text-muted); text-transform: uppercase;">Student Lead</span>
                            <p style="font-weight: 700; color: var(--brand-blue);">${club.leads}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    };

    const closeModalFunc = () => {
        document.getElementById('clubModal').style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    // 4. NAVBAR SCROLL EFFECT
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 5. CONTACT FORM SUCCESS
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.textContent;
            
            btn.textContent = 'Query Sent Successfully!';
            btn.style.background = '#28a745'; // Success Green
            btn.disabled = true;
            
            setTimeout(() => {
                contactForm.reset();
                btn.textContent = originalText;
                btn.style.background = '';
                btn.disabled = false;
            }, 3000);
        });
    }

    // Reveal System
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    }, { threshold: 0.05 });

    function init() {
        renderClubs(clubsData);
        renderLeadership();
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }

    init();
});
