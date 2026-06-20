const contentPaths = {
        'fsdvs': './projects/FS_DVS.html',
        // backward-compatible old id
        'ii-2606-06856': './projects/FS_DVS.html',
        'SkinSight': './projects/SkinSight.html',
        'skinsight': './projects/SkinSight.html',
        '3m-ti': './projects/3MTI.html',
        'dmdiff': './projects/DMDiff.html',
        'Dante': './projects/DANTE.html',
        'dante': './projects/DANTE.html',
        'lucid': './projects/LUCID.html',
        'about': './about.html',
        'team': './team.html',
    };

const directions = [
    {
    id: 'intelligent-imaging',
    title: 'Intelligent Imaging',
    kicker: 'Learning to see beyond sensor limits',
    description: 'Pushing the boundaries of imaging performance and scene perception through the fusion of physical sensing and AI.'
    },
    {
    id: 'ai-vision',
    title: 'Generative AI for Vision',
    kicker: 'Reconstruction with Generative Priors',
    description: 'Advancing high-fidelity reconstruction and controllable perception by integrating physics-aware generative models.'
    },
    {
    id: 'ai-optics',
    title: 'Optics + AI',
    kicker: 'Co-designing hardware and algorithms',
    description: 'Harnessing AI to solve fundamental scientific challenges through the joint optimization of optical systems and AI.'
    },
    {
    id: 'datasets',
    title: 'Datasets',
    kicker: 'Open-access datasets and benchmarks',
    description: 'Datasets and benchmarks.'
    },
    {
    id: 'resources',
    title: 'Resources',
    kicker: 'Tools and resources',
    description: 'Utilities, resources, and fun interactive mini-games.'
    }
];

    const projects = [
    // Intelligent Imaging
    {
        id: 'fsdvs',
        title: 'FS-DVS: A Frequency-Selective Dynamic Visual Sensing Paradigm for Enhancing Information Completeness',
        fullTitle: 'Feiyu Ji, Xiaokang Yang, <b>Xiaoyun Yuan</b><span style="font-size:1.6em; font-weight:bold;">✉</span>',
        direction: 'intelligent-imaging',
        directionLabel: 'Intelligent Imaging',
        status: '<b style="color: #1a202c; border-bottom: 1.5px solid #438993; padding-bottom: 1px;">arXiv</b> 2026',
        image: './projects/FS_DVS_fig/web/fs_dvs_logo_v2.png',
        summary: 'FS-DVS inserts a learnable center-surround filter before event triggering, restoring mid-frequency structure for dynamic vision.',
        tags: ['Neuromorphic Vision', 'Event Camera'],
        links: [
        { label: 'Project', href: './index.html?project=fsdvs', icon: 'fas fa-arrow-right' },
        { label: 'arXiv', href: 'https://arxiv.org/abs/2606.06856', icon: 'ai ai-arxiv' }
        ]
    },
    {
        id: 'SkinSight',
        title: 'A skin-conformal rigid-in-soft array-based imaging system',
        fullTitle: '<b>Xiaoyun Yuan*</b>, Jianing Zhang*, Youhai Liu, Yichen Wang, Lu Fang<span style="font-size:1.6em; font-weight:bold;">✉</span>',
        direction: 'intelligent-imaging',
        directionLabel: 'Intelligent Imaging',
        status: '<b style="color: #1a202c; border-bottom: 1.5px solid #438993; padding-bottom: 1px;">Nature Communications</b> 2026',
        image: './projects/SkinSight_fig/teaser.jpg',
        summary: 'SkinSight combines miniaturized imagers and stretchable interconnects in a rigid-in-soft array for skin-conformal visual sensing.',
        tags: ['Intelligent Imaging', 'Wearable Imaging', 'Embodied AI'],
        links: [
        { label: 'Project', href: './index.html?project=SkinSight', icon: 'fas fa-arrow-right' },
        { label: 'Paper', href: 'https://www.nature.com/articles/s41467-026-74257-9', icon: 'fas fa-file-pdf' }
        ]
    },
    {
        id: 'brainpact',
        title: 'Massively parallel functional photoacoustic computed tomography of the human brain',
        fullTitle: 'Shuai Na*, Jonathan J. Russin*, Li Lin*, <b>Xiaoyun Yuan*</b>, Peng Hu, Kay B. Jann, Lirong Yan, Konstantin Maslov, Junhui Shi, Danny J. Wang, Charles Y. Liu<span style="font-size:1.6em; font-weight:bold;">✉</span>, Lihong V. Wang<span style="font-size:1.6em; font-weight:bold;">✉</span>',
        direction: 'intelligent-imaging',
        directionLabel: 'Photoacoustic Computed Tomography',
        status: '<b style="color: #1a202c; border-bottom: 1.5px solid #438993; padding-bottom: 1px;">Nature Biomedical Engineering</b> 2022',
        image: 'https://pi.xiaoyunyuan.net/mypaper/paper_icon/nbme_2022.jpg',
        summary: 'A hemispherical ultrasound array enables photoacoustic brain imaging with 350-micrometre resolution and 2-second updates.',
        tags: ['Functional Brain Imaging', 'Photoacoustic Computed Tomography'],
        links: [
        { label: 'Paper', href: 'https://www.nature.com/articles/s41551-021-00735-8', icon: 'fas fa-file-pdf' }
        ]
    },
    {
        id: 'unstructuredcam',
        title: 'A modular hierarchical array camera',
        fullTitle: '<b>Xiaoyun Yuan*</b>, Mengqi Ji*, Jiamin Wu, David J. Brady, Qionghai Dai, Lu Fang<span style="font-size:1.6em; font-weight:bold;">✉</span>',
        direction: 'intelligent-imaging',
        directionLabel: 'Gigapixel Imaging',
        status: '<b style="color: #1a202c; border-bottom: 1.5px solid #438993; padding-bottom: 1px;">Light: Science & Applications</b> 2021',
        image: 'https://pi.xiaoyunyuan.net/mypaper/paper_icon/light_2021.jpg',
        summary: 'A hemispherical ultrasound array enables photoacoustic brain imaging with 350-micrometre resolution and 2-second updates.',
        tags: ['Gigapixel Videography', 'Unstructured Camera Arrays', 'Computational Imaging'],
        links: [
        { label: 'Paper', href: 'https://www.nature.com/articles/s41377-021-00485-x', icon: 'fas fa-file-pdf' }
        ]
    },
    {
        id: 'rafael',
        title: 'Integrated lithium niobate photonics for sub-ångström snapshot spectroscopy',
        fullTitle: 'Zhiyang Yao*, Shuyang Liu*, Yingce Wang*, <b>Xiaoyun Yuan</b>, Lu Fang<span style="font-size:1.6em; font-weight:bold;">✉</span>',
        direction: 'intelligent-imaging',
        directionLabel: 'Hyperspectral Imaging',
        status: '<b style="color: #1a202c; border-bottom: 1.5px solid #438993; padding-bottom: 1px;">Nature</b> 2025',
        image: 'https://pi.xiaoyunyuan.net/mypaper/paper_icon/nature_2025.jpg',
        summary: 'A sub-ångström snapshot spectroscopy method built on reconfigurable lithium-niobate photonics.',
        tags: ['Hyperspectral Imaging', 'Reconfigurable Imaging', 'Lithium Niobate Photonics'],
        links: [
        { label: 'Paper', href: 'https://www.nature.com/articles/s41586-025-09591-x', icon: 'fas fa-file-pdf' }
        ]
    },
    
    // Generative AI for Vision
    {
        id: 'lucid',
        title: 'LUCID: Learning Unified Control for Image Deflaring and Exposure Mastery in Nighttime Photography',
        fullTitle: 'Tingyu Yang, Yuan Cheng, <b>Xiaoyun Yuan</b><span style="font-size:1.6em; font-weight:bold;">✉</span>',
        direction: 'ai-vision',
        directionLabel: 'Generative AI for Vision',
        status: '<b style="color: #1a202c; border-bottom: 1.5px solid #438993; padding-bottom: 1px;">Siggraph</b> 2026',
        image: './projects/LUCID_fig/LUCID_logo.png',
        summary: 'Controllable nighttime restoration for deflaring and exposure mastery.',
        tags: ['Night Photography', 'Image Restoration', 'Exposure Control', 'Diffusion'],
        links: [
        { label: 'Project', href: './index.html?project=lucid', icon: 'fas fa-arrow-right' },
        { label: 'Code', href: 'https://github.com/frakenation/LUCID', icon: 'fab fa-github' },
        { label: 'Model', href: 'https://huggingface.co/Unswear/LUCID', icon: 'fas fa-database' },
        { label: 'arXiv', href: 'https://arxiv.org/abs/2606.06901', icon: 'ai ai-arxiv' }
        ]
    },
    {
        id: '3m-ti',
        title: 'High-Quality Mobile Thermal Imaging via Calibration-free Multi-Camera Cross-Modal Diffusion',
        fullTitle: 'Minchong Chen*, <b>Xiaoyun Yuan*</b><span style="font-size:1.6em; font-weight:bold;">✉</span>, Junzhe Wan, Jianing Zhang, Jun Zhang',
        direction: 'ai-vision',
        directionLabel: 'Generative AI for Vision',
        status: '<b style="color: #1a202c; border-bottom: 1.5px solid #438993; padding-bottom: 1px;">CVPR</b> 2026',
        image: './projects/3MTI_fig/fig_abs_square.jpg',
        summary: 'Calibration-free thermal enhancement with RGB guidance and diffusion priors for mobile perception.',
        tags: ['Thermal Imaging', 'Diffusion', 'Cross-Modal Fusion', 'Diffusion'],
        links: [
        { label: 'Project', href: './index.html?project=3m-ti', icon: 'fas fa-arrow-right' },
        { label: 'Code', href: 'https://github.com/work-submit/3MTI', icon: 'fab fa-github' },
        { label: 'arXiv', href: 'https://arxiv.org/abs/2511.19117', icon: 'ai ai-arxiv' }
        ]
    },
    {
        id: 'dmdiff',
        title: 'Degradation-Modeled Multipath Diffusion for Tunable Metalens Photography',
        fullTitle: 'Jianing Zhang, Jiayi Zhu, Feiyu Ji, Xiaokang Yang, <b>Xiaoyun Yuan</b><span style="font-size:1.6em; font-weight:bold;">✉</span>',
        direction: 'ai-vision',
        directionLabel: 'Generative AI for Vision',
        status: '<b style="color: #1a202c; border-bottom: 1.5px solid #438993; padding-bottom: 1px;">ICCV</b> 2025',
        image: './projects/DMDiff_fig/images/teaser_square.jpg',
        summary: 'A tunable diffusion framework for compact metalens photography.',
        tags: ['Metalens', 'Computational Optics', 'Generative Restoration', 'Diffusion'],
        links: [
        { label: 'Project', href: './index.html?project=dmdiff', icon: 'fas fa-arrow-right' },
        { label: 'Code', href: 'https://github.com/yuanxy92/DMDiff_ICCV2025', icon: 'fab fa-github' },
        { label: 'arXiv', href: 'https://arxiv.org/abs/2506.22753', icon: 'ai ai-arxiv' }
        ]
    },
    {
        id: 'gbr',
        title: 'GBR: Generative Bundle Refinement for High-fidelity Gaussian Splatting with Enhanced Mesh Reconstruction',
        fullTitle: 'Jianing Zhang, Yuchao Zheng, Ziwei Li, Qionghai Dai, <b>Xiaoyun Yuan</b><span style="font-size:1.6em; font-weight:bold;">✉</span>',
        direction: 'ai-vision',
        directionLabel: 'Generative AI for Gaussian Splatting',
        status: '<b style="color: #1a202c; border-bottom: 1.5px solid #438993; padding-bottom: 1px;">IEEE TCSVT</b> 2025',
        image: 'https://pi.xiaoyunyuan.net/mypaper/paper_icon/csvt2025_GBR.jpg',
        summary: 'High-fidelity Gaussian splatting and meshing from only 4-6 input views.',
        tags: ['Gaussian Splatting', 'Mesh Reconstruction', 'Diffusion'],
        links: [
        { label: 'Project', href: 'https://gbrnvs.github.io/', icon: 'fas fa-arrow-right' },
        { label: 'Paper', href: 'https://ieeexplore.ieee.org/document/11119723', icon: 'fas fa-file-pdf' },
        { label: 'arXiv', href: 'https://arxiv.org/abs/2412.05908', icon: 'ai ai-arxiv' }
        ]
    },

    // Optics + AI
    {
        id: 'Dante',
        title: 'Training large-scale optoelectronic neural networks with dual-neuron optical-artificial learning',
        fullTitle: '<b>Xiaoyun Yuan</b>, Yong Wang, Zhihao Xu, Tiankuang Zhou, Lu Fang<span style="font-size:1.6em; font-weight:bold;">✉</span>',
        direction: 'ai-optics',
        directionLabel: 'Optical Neural Networks',
        status: '<b style="color: #1a202c; border-bottom: 1.5px solid #438993; padding-bottom: 1px;">Nature Communications</b> 2023',
        image: './projects/DANTE_fig/dante_logo_symbol.png',
        summary: 'Dual-neuron optical-artificial learning for large-scale diffractive neural networks.',
        tags: ['Optics + AI', 'Intelligent Computing', 'Optical Neural Networks'],
        links: [
        { label: 'Project', href: './index.html?project=dante', icon: 'fas fa-arrow-right' },
        { label: 'Paper', href: 'https://www.nature.com/articles/s41467-023-42984-y', icon: 'fas fa-file-pdf' },
        { label: 'Code', href: 'https://github.com/yuanxy92/DANTE/tree/dante_nc', icon: 'fab fa-github' }
        ]
    },
    {
        id: 'Monet',
        title: 'A multichannel optical computing architecture for advanced machine vision',
        fullTitle: 'Zhihao Xu*, <b>Xiaoyun Yuan*</b>, Tiankuang Zhou, Lu Fang<span style="font-size:1.6em; font-weight:bold;">✉</span>',
        direction: 'ai-optics',
        directionLabel: 'Optical Neural Networks',
        status: '<b style="color: #1a202c; border-bottom: 1.5px solid #438993; padding-bottom: 1px;">Light: Science & Applications</b> 2022',
        image: 'https://pi.xiaoyunyuan.net/mypaper/paper_icon/light_2022.jpg',
        summary: 'A multichannel optical computing architecture for efficient intelligent vision tasks.',
        tags: ['Optics + AI', 'Intelligent Computing', 'Optical Neural Networks'],
        links: [
        { label: 'Paper', href: 'https://www.nature.com/articles/s41377-022-00945-y', icon: 'fas fa-file-pdf' }
        ]
    },

    // Datasets
    {
        id: 'metalens-dataset',
        title: 'Metalens Dataset',
        fullTitle: '<b>Xiaoyun Yuan</b><span style="font-size:1.6em; font-weight:bold;">✉</span>',
        direction: 'datasets',
        directionLabel: 'Metalens Datasets',
        status: 'Image Reconstruction',
        image: './projects/DMDiff_fig/images/teaser_square.jpg',
        summary: 'A 10,000+ pair dataset for metalens image restoration.',
        tags: ['Optics + AI', 'Image Restoration', 'Metalens'],
        links: [
        { label: 'Project', href: './index.html?project=dmdiff', icon: 'fas fa-arrow-right' },
        { label: 'Dataset', href: 'https://pan.sjtu.edu.cn/web/share/ebafd0ff28a601db09b58744a5b914d1', icon: 'fas fa-database' }
        ]
    },
    {
        id: 'vir-dataset',
        title: 'Visual-Infrared Dataset for Mobile Computational Imaging',
        fullTitle: '<b>Xiaoyun Yuan</b><span style="font-size:1.6em; font-weight:bold;">✉</span>',
        direction: 'datasets',
        directionLabel: 'Mobile Vis-IR Datasets',
        status: 'Image Fusion and Reconstruction',
        image: './projects/3MTI_fig/fig_abs_square.jpg',
        summary: 'A cross-resolution visible-infrared benchmark for mobile photography.',
        tags: ['Image Restoration', 'Visual-Infrared'],
        links: [
        { label: 'Project', href: './index.html?project=3m-ti', icon: 'fas fa-arrow-right' },
        { label: 'Dataset', href: 'https://pan.sjtu.edu.cn/web/share/7df7f0df32ac4cd4eecc243f5ff95483', icon: 'fas fa-database' }
        ]
    },
    {
        id: 'panda-dataset',
        title: 'Panda: A gigapixel-level human-centric video dataset',
        fullTitle: '<b>GigaVision</b>',
        direction: 'datasets',
        directionLabel: 'Gigapixel Dataset',
        status: 'Gigapixel Visual Analysis',
        image: 'https://yuanxy92.github.io/mypaper/paper_icon/cvpr_panda.jpg',
        summary: 'A gigapixel human-centric video dataset for large-scale visual analysis.',
        tags: ['Computer Vision', 'VLM', 'Gigapixel'],
        links: [
        { label: 'Project and Dataset', href: 'https://gigavision.cn/data/news?nav=DataSet%20Panda&type=nav&t=1731982080864', icon: 'fas fa-database' },
        ]
    },
    {
        id: 'gigamvs-dataset',
        title: 'GigaMVS: A Benchmark for Ultra-Large-Scale Gigapixel-Level 3D Reconstruction',
        fullTitle: '<b>GigaVision</b>',
        direction: 'datasets',
        directionLabel: 'Gigapixel Dataset',
        status: 'Gigapixel 3D Reconstruction',
        image: 'https://yuanxy92.github.io/mypaper/paper_icon/pami_gigamvs.jpg',
        summary: 'A gigapixel-image benchmark for ultra-large-scale 3D reconstruction.',
        tags: ['3D Reconstruction', 'Multi-View Stereo', 'Gigapixel'],
        links: [
        { label: 'Project and Dataset', href: 'https://gigavision.cn/data/news?nav=GigaMVS%20RAWDATA&type=nav&t=1731982252980', icon: 'fas fa-database' }
        ]
    },

    // Resources
    {
        id: 'rl-flappy-bird',
        title: 'Playing Flappy Bird via Reinforcement Learning',
        fullTitle: '<b>Xiaoyun Yuan</b>',
        direction: 'resources',
        directionLabel: 'Reinforcement Learning',
        status: 'Game AI',
        image: './projects/RL_flappybird/flappy_bird.png',
        summary: 'An RL Flappy Bird demo using Q-learning.',
        tags: ['Reinforcement Learning', 'Game AI'],
        links: [
        { label: 'Online Game', href: 'https://rlbird.xiaoyunyuan.net', icon: 'fas fa-arrow-right' },
        { label: 'GitHub', href: 'https://github.com/yuanxy92/rl-flappybird', icon: 'fab fa-github' }
        ]
    },
    {
        id: 'rl-dp-vs-mc',
        title: 'Dynamic Programming vs. Monte Carlo Methods in Reinforcement Learning',
        fullTitle: '<b>Xiaoyun Yuan</b>',
        direction: 'resources',
        directionLabel: 'Reinforcement Learning',
        status: 'Educational Resources',
        image: './projects/Resources/images/DP_vs_MC.png',
        summary: 'An interactive demo comparing dynamic programming and Monte Carlo methods.',
        tags: ['Reinforcement Learning'],
        links: [
        { label: 'Online Game', href: 'https://pi.xiaoyunyuan.net/resources/RL/DP_vs_MC.html', icon: 'fas fa-arrow-right' },
        ]
    },
    {
        id: 'independent-random-variables-sum',
        title: 'Distribution of Sums of Independent Random Variables',
        fullTitle: '<b>Xiaoyun Yuan</b>',
        direction: 'resources',
        directionLabel: 'Educational Resources',
        status: 'Probability Demo',
        image: './projects/Resources/images/independent-sum-thumb-picked.png',
        summary: 'An interactive demo for sums, convolution, and the central limit theorem.',
        tags: ['Probability', 'Statistics', 'Convolution'],
        links: [
        { label: 'Launch Demo', href: './projects/Resources/独立随机变量和的分布.html', icon: 'fas fa-arrow-right' },
        ]
    },
    ];
