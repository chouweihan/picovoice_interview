const build: string[] = [
    "Stable (1.11.0)",
    "Preview (Nightly)",
    "LTS (1.8.2)"
]

const os: string[] = [
    "Linux",
    "Mac",
    "Windows"
]

const packages: string[] = [
    "Conda",
    "Pip",
    "LibTorch",
    "Source"
]

const language: string[] = [
    "Python",
    "C++/Java"
]

const platform: string[] = [
    "CUDA 10.2",
    "CUDA 11.1",
    "ROCM 4.5.2 (beta)",
    "CPU"
]

export type TBuild = typeof build[number];
export type TOS = typeof os[number];
export type TPackages = typeof packages[number];
export type TLanguage = typeof language[number];
export type TPlatform = typeof platform[number];

export type Choice = "build" | "os" | "packages" | "language" | "platform";

export const pytorchData = {
    build,
    os,
    language,
    platform,
    packages
}

export interface IPyState {
    build: TBuild,
    os: TOS,
    language: TLanguage,
    platform: TPlatform,
    packages: TPackages
}


export const variations = [
    {
        build: "Stable (1.11.0)",
        os: "Linux",
        packages: "Conda",
        language: "Python",
        platform: "CUDA 10.2",
        html: `<p>conda install pytorch torchvision torchaudio cudatoolkit=10.2 -c pytorch</p>`
    },
    {
        build: "Stable (1.11.0)",
        os: "Mac",
        packages: "Conda",
        language: "Python",
        platform: "CUDA 10.2",
        html: `<p># MacOS Binaries dont support CUDA, install from source if CUDA is needed
        conda install pytorch torchvision torchaudio -c pytorch</p>`,
    },
    {
        build: "Stable (1.11.0)",
        os: "Windows",
        packages: "Conda",
        language: "Python",
        platform: "CUDA 10.2",
        html: `<p>CUDA-10.2 PyTorch builds are no longer available for Windows, please use CUDA-11.3</p>`,
    },
    {
        build: "Stable (1.11.0)",
        os: "Linux",
        packages: "Pip",
        language: "Python",
        platform: "CUDA 10.2",
        html: `<p>pip3 install torch torchvision torchaudio</p>`,
    },
    {
        build: "Stable (1.11.0)",
        os: "Linux",
        packages: "LibTorch",
        language: "C++/Java",
        platform: "CUDA 10.2",
        html: `<p>Download here (Pre-cxx11 ABI):</p><a href="https://download.pytorch.org/libtorch/cu102/libtorch-shared-with-deps-1.11.0%2Bcu102.zip" rel="noreferrer">https://download.pytorch.org/libtorch/cu102/libtorch-shared-with-deps-1.11.0%2Bcu102.zip</a><p>
        Download here (cxx11 ABI):</p><a href="https://download.pytorch.org/libtorch/cu102/libtorch-cxx11-abi-shared-with-deps-1.11.0%2Bcu102.zip" rel="noreferrer">https://download.pytorch.org/libtorch/cu102/libtorch-cxx11-abi-shared-with-deps-1.11.0%2Bcu102.zip</a>`,
    },
    {
        build: "Stable (1.11.0)",
        os: "Linux",
        packages: "Source",
        language: "Python",
        platform: "CUDA 10.2",
        html: `<p># Follow instructions at this URL: https://github.com/pytorch/pytorch#from-source </p>`,
    },
    {
        build: "Preview (Nightly)",
        os: "Linux",
        packages: "Conda",
        language: "Python",
        platform: "CUDA 10.2",
        html: `<p>conda install pytorch torchvision torchaudio cudatoolkit=10.2 -c pytorch-nightly</p>`,
    }
]