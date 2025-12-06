import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/portfolio";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/portfolio/${project.category}/${project.slug}`}
      className="group block overflow-hidden rounded-2xl"
    >
      <div className="relative w-full h-64 md:h-72 lg:h-80 overflow-hidden rounded-2xl border border-white/10">
        <Image
          src={project.cover}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="mt-4 flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="text-sm text-white/70">{project.client ? project.client + " • " : ""}{project.year}</p>
        </div>
      </div>
    </Link>
  );
}
