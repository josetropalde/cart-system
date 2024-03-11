import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";
import { api } from "~/trpc/server";

export default async function Home() {
  noStore();
  const data = await api.product.getAll.query();

  return (
    <div>
      {data.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}
