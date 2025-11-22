// Sayfa tamamen yüklendiğinde çalıştır
document.addEventListener('DOMContentLoaded', function() {
    
    [span_1](start_span)[span_2](start_span)// --- VERİ SETİ (PDF Kaynaklı [cite: 1-10]) ---
    const DATA = {
        nodes: [
            // 1. ERKEN DÖNEM (Kırmızı)
            { id: 'ziyag', label: 'Ziya Gökalp', group: 'Erken', year: '1876–1924', 
              bio: 'Türk sosyolojisinin kurucusu (1914 Kürsüsü). Durkheimcı ekol. [cite_start]Ulus-devlet inşasının fikir babası.[span_1](end_span)[span_2](end_span)' },
            { id: 'psabahattin', label: 'Prens Sabahattin', group: 'Erken', year: '1879–1948', 
              bio: 'Le Play ekolü (Science Sociale). [span_3](start_span)[span_4](start_span)"Adem-i Merkeziyet" ve bireysel girişimciliği savundu.[span_3](end_span)[span_4](end_span)' },
            
            // 2. AKADEMİ & KURUMSAL DÖNEM (Turuncu)
            { id: 'hzu', label: 'Hilmi Ziya Ülken', group: 'Akademi', year: '1901–1974', 
              bio: 'İstanbul Üniversitesi. Felsefe ve sosyolojiyi sentezledi. "Aşk Ahlakı" yazarı. [span_5](start_span)[span_6](start_span)1940\'ların durgunluğunu aşan isim.[span_5](end_span)[span_6](end_span)' },
            { id: 'zff', label: 'Z.F. Fındıkoğlu', group: 'Akademi', year: '1899–1974', 
              bio: 'İş ve Düşünce dergisini kurdu. [span_7](start_span)Hukuk sosyolojisi ve folklor çalışmaları yaptı.[span_7](end_span)' },

            // 3. MONOGRAFİ & SAHA DÖNEMİ (Yeşil)
            { id: 'berkes', label: 'Niyazi Berkes', group: 'Monografi', year: '1908–1988', 
              bio: 'DTCF Ekolü. "Ankara Köyleri" (1942) araştırmasıyla saha çalışması geleneğini başlattı. [span_8](start_span)[span_9](start_span)Sekülerleşme üzerine çalıştı.[span_8](end_span)[span_9](end_span)' },
            { id: 'boran', label: 'Behice Boran', group: 'Monografi', year: '1910–1987', 
              bio: 'DTCF Ekolü. Manisa köyleri üzerine saha çalışması yaptı. [span_10](start_span)[span_11](start_span)Toplumsal yapı ve sınıf analizi.[span_10](end_span)[span_11](end_span)' },
            { id: 'mturhan', label: 'Mümtaz Turhan', group: 'Monografi', year: '1908–1969', 
              bio: '"Garplılaşmanın Neresindeyiz?". Kültür değişmeleri ve sosyal psikoloji. [span_12](start_span)Batılılaşmayı zorunlu gördü.[span_12](end_span)' },

            // 4. TEORİK VE TARİHSEL YÖNELİM (Mor)
            { id: 'bsezer', label: 'Baykan Sezer', group: 'Teorik', year: '1939–1996', 
              bio: 'ATÜT eleştirisi. [span_13](start_span)[span_14](start_span)Osmanlı\'yı "Doğu-Batı çatışması" ekseninde "Bozkır Devleti" olarak tanımladı.[span_13](end_span)[span_14](end_span)' },
            { id: 'mkiray', label: 'Mübeccel Kıray', group: 'Teorik', year: '1923–2007', 
              bio: '"Tampon Kurumlar" teorisi. Ereğli araştırması. [span_15](start_span)[span_16](start_span)Feodaliteden sanayiye geçişte kentin ve mekânın dönüşümü.[span_15](end_span)[span_16](end_span)' },
            { id: 'cmeric', label: 'Cemil Meriç', group: 'Teorik', year: '1916–1987', 
              bio: 'Sosyolojiye eleştirel yaklaşım. Batı sosyolojisini sorguladı. [span_17](start_span)[span_18](start_span)"Bu Ülke".[span_17](end_span)[span_18](end_span)' },

            // 5. KÜLTÜR VE DİN (Pembe)
            { id: 'smardin', label: 'Şerif Mardin', group: 'Kultur', year: '1927–2017', 
              bio: '"Merkez-Çevre" ilişkisi ve "Din ve İdeoloji". [span_19](start_span)[span_20](start_span)Türk modernleşmesinde dinin rolü.[span_19](end_span)[span_20](end_span)' },
            { id: 'egungor', label: 'Erol Güngör', group: 'Kultur', year: '1938–1983', 
              bio: 'Sosyal psikolog. [span_21](start_span)[span_22](start_span)Dini, kültürün ve kimliğin merkezi bir ögesi olarak gördü.[span_21](end_span)[span_22](end_span)' },
            { id: 'abilgiseven', label: 'Amiran K. Bilgiseven', group: 'Kultur', year: '1926–2005', 
              bio: 'Din sosyolojisi çalışmaları. [span_23](start_span)[span_24](start_span)"Tevhit" kavramını sosyolojik bütünleştirici ilke olarak ele aldı.[span_23](end_span)[span_24](end_span)' },

            // 6. KAVRAMLAR VE KURUMLAR (Mavi/Gri)
            { id: 't_modern', label: 'Modernleşme', group: 'Tema', bio: 'Türk sosyolojisinin ana ekseni: Batılılaşma ve Uluslaşma.' },
            { id: 't_din', label: 'Din ve Toplum', group: 'Tema', bio: 'Laiklik, Alevilik, Tarikatlar ve İslamcılık tartışmaları.' },
            { id: 't_kent', label: 'Kentleşme', group: 'Tema', bio: 'Gecekondu, göç ve tampon kurumlar.' },
            { id: 't_koy', label: 'Köy Yapısı', group: 'Tema', bio: 'Köy monografileri, feodalite ve ATÜT tartışmaları.' },
        ],
        edges: [
            { source: 'ziyag', target: 't_modern', rel: 'Teorisyen' },
            { source: 'psabahattin', target: 't_koy', rel: 'Science Sociale' },
            { source: 'psabahattin', target: 'ziyag', rel: 'Fikri Rakip' },
            
            { source: 'hzu', target: 't_modern', rel: 'Düşünce Tarihi' },
            
            { source: 'berkes', target: 't_modern', rel: 'Sekülerleşme' },
            { source: 'boran', target: 't_koy', rel: 'Sınıf Analizi' },
            
            { source: 'mturhan', target: 't_modern', rel: 'Batılılaşma' },
            { source: 'mturhan', target: 'egungor', rel: 'Hoca' },
            
            { source: 'mkiray', target: 't_kent', rel: 'Tampon Kurumlar' },
            
            { source: 'bsezer', target: 't_koy', rel: 'ATÜT Eleştirisi' },
            
            { source: 'smardin', target: 't_din', rel: 'Merkez-Çevre' },
            { source: 'smardin', target: 'berkes', rel: 'Eleştirel Diyalog' },
            
            { source: 'abilgiseven', target: 't_din', rel: 'Tevhit' },
            { source: 'cmeric', target: 't_modern', rel: 'Batı Eleştirisi' }
        ]
    };

    // --- CYTOSCAPE AYARLARI ---
    const cy = cytoscape({
        container: document.getElementById('cy'), // HTML'deki id="cy"
        
        elements: [
            // Node'ları ekle (renkleri script içinde değil CSS variable ile yöneteceğiz ama burada group datası önemli)
            ...DATA.nodes.map(n => ({ 
                data: { ...n, weight: n.group === 'Tema' ? 80 : 50 } 
            })),
            // Edge'leri ekle
            ...DATA.edges.map((e, i) => ({ 
                data: { id: 'e'+i, source: e.source, target: e.target } 
            }))
        ],

        style: [
            {
                selector: 'node',
                style: {
                    'label': 'data(label)',
                    'color': '#f1f5f9',
                    'font-size': '12px',
                    'font-weight': '500',
                    'text-valign': 'bottom',
                    'text-margin-y': 8,
                    'text-background-color': '#0f172a',
                    'text-background-opacity': 0.7,
                    'text-background-padding': '3px',
                    'width': 'data(weight)',
                    'height': 'data(weight)',
                    'border-width': 2,
                    'border-color': 'rgba(255,255,255,0.1)',
                    // Dinamik Renk Atama
                    'background-color': function(ele){
                        const g = ele.data('group');
                        if(g==='Erken') return '#ef4444';
                        if(g==='Akademi') return '#f59e0b';
                        if(g==='Monografi') return '#10b981';
                        if(g==='Teorik') return '#8b5cf6';
                        if(g==='Kultur') return '#ec4899';
                        if(g==='Tema') return '#3b82f6';
                        return '#94a3b8';
                    }
                }
            },
            {
                selector: 'node[group="Tema"]',
                style: {
                    'shape': 'round-rectangle',
                    'width': 120,
                    'height': 40,
                    'text-valign': 'center',
                    'text-margin-y': 0,
                    'font-weight': '700',
                    'color': '#fff'
                }
            },
            {
                selector: 'edge',
                style: {
                    'width': 1.5,
                    'curve-style': 'bezier',
                    'line-color': '#475569',
                    'target-arrow-shape': 'triangle',
                    'target-arrow-color': '#475569',
                    'opacity': 0.4
                }
            },
            {
                selector: ':selected',
                style: {
                    'border-width': 3,
                    'border-color': '#fff',
                    'line-color': '#6366f1',
                    'target-arrow-color': '#6366f1',
                    'opacity': 1
                }
            }
        ],

        layout: {
            name: 'cose', // Fizik tabanlı yerleşim
            animate: false, // İlk açılışta animasyonu kapattık ki hızlı yüklensin
            nodeRepulsion: 4500,
            idealEdgeLength: 100,
            gravity: 1
        }
    });

    // --- ETKİLEŞİMLER ---

    // 1. Düğüme Tıklama
    cy.on('tap', 'node', function(evt){
        const node = evt.target;
        const d = node.data();
        
        // UI Güncelle
        const card = document.getElementById('node-card');
        const emptyState = document.getElementById('empty-state');
        
        card.classList.remove('hidden');
        emptyState.classList.add('hidden');
        
        document.getElementById('card-title').textContent = d.label;
        document.getElementById('card-badge').textContent = d.group;
        document.getElementById('card-meta').textContent = d.year || 'Genel Kavram';
        document.getElementById('card-body').textContent = d.bio;

        // Highlight Efekti
        cy.elements().animate({ style: { opacity: 0.1 } }, { duration: 200 });
        const neighborhood = node.neighborhood().add(node);
        neighborhood.animate({ style: { opacity: 1 } }, { duration: 200 });
    });

    // 2. Boşluğa Tıklama (Reset)
    cy.on('tap', function(evt){
        if(evt.target === cy){
            resetUI();
        }
    });

    function resetUI(){
        document.getElementById('node-card').classList.add('hidden');
        document.getElementById('empty-state').classList.remove('hidden');
        cy.elements().animate({ style: { opacity: 1, display: 'element' } }, { duration: 200 });
    }

    // 3. Arama
    document.getElementById('search').addEventListener('input', function(e){
        const val = e.target.value.toLowerCase();
        if(!val) {
            cy.elements().style('display', 'element');
            return;
        }
        
        cy.batch(() => {
            cy.nodes().forEach(n => {
                const match = n.data('label').toLowerCase().includes(val) || 
                              (n.data('bio')||'').toLowerCase().includes(val);
                n.style('display', match ? 'element' : 'none');
            });
        });
    });

    // 4. Filtreleme (Legend Tıklama)
    const filters = document.querySelectorAll('.filter-item');
    filters.forEach(item => {
        item.addEventListener('click', () => {
            const group = item.dataset.group;
            cy.batch(() => {
                cy.nodes().forEach(n => {
                    // Tema düğümleri bağlam için hep kalsın istenirse || n.data('group') === 'Tema' eklenir
                    const show = n.data('group') === group || n.data('group') === 'Tema';
                    n.style('display', show ? 'element' : 'none');
                });
            });
        });
    });

    // 5. Butonlar
    document.getElementById('reset-btn').addEventListener('click', () => {
        resetUI();
        cy.layout({ name: 'cose', animate: true }).run();
        cy.elements().style('display', 'element');
    });

    document.getElementById('fit-btn').addEventListener('click', () => {
        cy.fit(20);
    });

    // Yükleme ekranını kaldır
    document.getElementById('loading').style.display = 'none';
});
