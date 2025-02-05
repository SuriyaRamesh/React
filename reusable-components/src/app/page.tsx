import Button from "@/components/Button";
import Card from "@/components/Card";
import List from "@/components/List";

export default function Home() {
  return (
    <div className="p-8 flex justify-center items-center flex-wrap flex-col mb-4">
      <div className="flex gap-4 p-8">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Danger</Button>
        <Button size="small">Size</Button>
        <Button variant="secondary">Size</Button>
        <Button size="large" variant="danger">Size</Button>
      </div>
      <Card title="Reusable Card" description="This is a reusable card component">
        <Button variant="secondary">Learn More</Button>
      </Card>
      <List items={["React", "Nextjs", "TypeScript", "TailwindCSS"]} />
    </div>
  );
}
