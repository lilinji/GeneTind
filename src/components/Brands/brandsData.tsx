export interface TechPartner {
  id: string;
  name: string;
  category: string;
  spec: string;
}

export const techPartners: TechPartner[] = [
  {
    id: "nvidia",
    name: "NVIDIA",
    category: "GPU & AI Computing",
    spec: "CUDA · TensorRT · Clara",
  },
  {
    id: "intel",
    name: "Intel",
    category: "Heterogeneous Compute",
    spec: "Xeon Scalable · oneAPI",
  },
  {
    id: "amd",
    name: "AMD",
    category: "High-Density Server",
    spec: "EPYC 9004 · Instinct MI300",
  },
  {
    id: "nextflow",
    name: "Nextflow",
    category: "Bio-Pipeline Orchestration",
    spec: "nf-core · Reproducible",
  },
  {
    id: "slurm",
    name: "SchedMD Slurm",
    category: "Workload Management",
    spec: "High-Throughput HPC",
  },
  {
    id: "broadcom",
    name: "Broadcom",
    category: "Fabric Interconnect",
    spec: "PCIe Gen5 · RoCEv2",
  },
];
