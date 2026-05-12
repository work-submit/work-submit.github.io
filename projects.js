const contentPaths = {
        '3m-ti': './projects/3MTI.html',
        'dmdiff': './projects/DMDiff.html',
        'lucid': './projects/LUCID.html',
        'about': './about.html'
    };

const directions = [
    {
        id: 'intelligent-imaging',
        title: 'Intelligent Imaging',
        kicker: 'Learning to see beyond sensor limits',
        description: 'Enhancing image quality and scene understanding by combining physical sensing, multi-modal signals, and generative priors.'
    },
    {
        id: 'ai-vision',
        title: 'Generative AI for Vision',
        kicker: 'Toward Controllable and Physics-Aware Perception in Adverse Environments',
        description: 'Advancing robust vision through generative models that bridge the gap between degraded signals and high-fidelity reconstruction, enabling precise semantic understanding under extreme conditions.'
    },
    {
        id: 'ai-optics',
        title: 'Optics + AI',
        kicker: 'Co-designing optical imaging hardware and learned reconstruction',
        description: 'Computational imaging systems where compact optics, camera design, and AI reconstruction are treated as one research problem.'
    },
    {
        id: 'datasets',
        title: 'Datasets',
        kicker: 'Public datasets',
        description: 'Datasets for academic research'
    }
    ];

const projects = [
    // Intelligent Imaging
    {
        id: 'SkinSight',
        title: 'A skin-conformal rigid-in-soft array-based imaging system',
        fullTitle: '<b>Xiaoyun Yuan*</b>, Jianing Zhang*, Youhai Liu, Yichen Wang, Lu Fang<span style="font-size:1.6em; font-weight:bold;">✉</span>',
        direction: 'intelligent-imaging',
        directionLabel: 'Intelligent Imaging',
        status: '<b style="color: #1a202c; border-bottom: 1px solid #3b8276; padding-bottom: 0.5px;">Nature Communications</b> 2026',
        image: './projects/SkinSight_fig/teaser.jpg',
        summary: 'By integrating miniaturized cameras with stretchable interconnects, this skin-conformal rigid-in-soft system endows dynamic surfaces with high-fidelity visual capabilities, augmenting perception for wearables and embodied artificial intelligence.',
        tags: ['Intelligent Imaging', 'Wearable Imaging', 'Embodied AI'],
        links: [
        { label: 'Comming Soon', href: '', icon: 'fas fa-file-pdf' }
        ]
    },
    {
        id: 'brainpact',
        title: 'Massively parallel functional photoacoustic computed tomography of the human brain',
        fullTitle: 'Shuai Na*, Jonathan J. Russin*, Li Lin*, <b>Xiaoyun Yuan*</b>, Peng Hu, Kay B. Jann, Lirong Yan, Konstantin Maslov, Junhui Shi, Danny J. Wang, Charles Y. Liu<span style="font-size:1.6em; font-weight:bold;">✉</span>, Lihong V. Wang<span style="font-size:1.6em; font-weight:bold;">✉</span>',
        direction: 'intelligent-imaging',
        directionLabel: 'Photoacoustic Computed Tomography',
        status: '<b style="color: #1a202c; border-bottom: 1px solid #3b8276; padding-bottom: 0.5px;">Nature Biomedical Engineering</b> 2022',
        image: 'https://pi.xiaoyunyuan.net/mypaper/paper_icon/nbme_2022.jpg',
        summary: 'Arrays of ultrasonic transducers arranged hemispherically around the head enable the mapping of haemodynamic changes in the brain via photoacoustic computed tomography at resolutions down to 350 micrometres and 2 seconds.',
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
        status: '<b style="color: #1a202c; border-bottom: 1px solid #3b8276; padding-bottom: 0.5px;">Light: Science & Applications</b> 2021',
        image: 'https://pi.xiaoyunyuan.net/mypaper/paper_icon/light_2021.jpg',
        summary: 'Arrays of ultrasonic transducers arranged hemispherically around the head enable the mapping of haemodynamic changes in the brain via photoacoustic computed tomography at resolutions down to 350 micrometres and 2 seconds.',
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
        status: '<b style="color: #1a202c; border-bottom: 1px solid #3b8276; padding-bottom: 0.5px;">Nature</b> 2025',
        image: 'https://pi.xiaoyunyuan.net/mypaper/paper_icon/nature_2025.jpg',
        summary: 'A sub-ångström ultra-high-transmittance snapshot spectroscopic technique, which targets this trade-off with integrated and reconfigurable photonics based on lithium niobate.',
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
        status: '<b style="color: #1a202c; border-bottom: 1px solid #3b8276; padding-bottom: 0.5px;">Siggraph</b> 2026',
        image: './projects/LUCID_fig/LUCID_logo.png',
        summary: 'A nighttime photography project on controllable restoration, deflaring, and exposure mastery.',
        tags: ['Night Photography', 'Image Restoration', 'Exposure Control', 'Diffusion'],
        links: [
        { label: 'Project', href: './index.html?project=lucid', icon: 'fas fa-arrow-right' }
        ]
    },
    {
        id: '3m-ti',
        title: 'High-Quality Mobile Thermal Imaging via Calibration-free Multi-Camera Cross-Modal Diffusion',
        fullTitle: 'Minchong Chen*, <b>Xiaoyun Yuan*</b><span style="font-size:1.6em; font-weight:bold;">✉</span>, Junzhe Wan, Jianing Zhang, Jun Zhang',
        direction: 'ai-vision',
        directionLabel: 'Generative AI for Vision',
        status: '<b style="color: #1a202c; border-bottom: 1px solid #3b8276; padding-bottom: 0.5px;">CVPR</b> 2026',
        image: './projects/3MTI_fig/fig_abs_square.jpg',
        summary: 'Calibration-free multi-camera thermal enhancement that uses RGB guidance and diffusion priors for mobile thermal perception.',
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
        status: '<b style="color: #1a202c; border-bottom: 1px solid #3b8276; padding-bottom: 0.5px;">ICCV</b> 2025',
        image: './projects/DMDiff_fig/images/teaser_square.jpg',
        summary: 'A tunable diffusion framework for compact metalens photography, balancing perceptual detail with optical fidelity.',
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
        status: '<b style="color: #1a202c; border-bottom: 1px solid #3b8276; padding-bottom: 0.5px;">IEEE TCSVT</b> 2025',
        image: 'https://pi.xiaoyunyuan.net/mypaper/paper_icon/csvt2025_GBR.jpg',
        summary: 'A method for high-fidelity Gaussian splatting and meshing using only 4—6 input views.',
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
        status: '<b style="color: #1a202c; border-bottom: 1px solid #3b8276; padding-bottom: 0.5px;">Nature Communications</b> 2023',
        image: 'https://pi.xiaoyunyuan.net/mypaper/paper_icon/nc_2023.jpg',
        summary: 'A dual-neuron optical-artificial learning approach for training large-scale diffractive neural networks, achieving VGG-level performance on ImageNet in simulation with a network that is 10 times larger than existing ones.',
        tags: ['Optics + AI', 'Intelligent Computing', 'Optical Neural Networks'],
        links: [
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
        status: '<b style="color: #1a202c; border-bottom: 1px solid #3b8276; padding-bottom: 0.5px;">Light: Science & Applications</b> 2022',
        image: 'https://pi.xiaoyunyuan.net/mypaper/paper_icon/light_2022.jpg',
        summary: 'A multichannel optical neural network architecture for a universal multiple-input multiple-channel optical computing, which can be optically implemented with high-efficiency, enabling real-world intelligent multichannel-processing tasks solved via optical computing, including 3D/motion detections. ',
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
        summary: 'A metalens dataset for research on image restoration, which includes 10,000+ image pairs captured by a metalens camera.',
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
        summary: 'A cross-resolution Vis-IR benchmark for mobile photography, facilitating research on cross-modal restoration and light synthesis.',
        tags: ['Image Restoration', 'Visual-Infrared'],
        links: [
        { label: 'Project', href: './index.html?project=3m-ti', icon: 'fas fa-arrow-right' },
        { label: 'Dataset', href: 'https://pan.sjtu.edu.cn/web/share/7df7f0df32ac4cd4eecc243f5ff95483', icon: 'fas fa-database' }
        ]
    }
    ];

