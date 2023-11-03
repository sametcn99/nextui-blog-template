import { Card, CardBody } from "@nextui-org/react";
import Link from "next/link";

// Random category names
const categories = [
  "Technology",
  "Sports",
  "Health",
  "Education",
  "Art",
  "Music",
  "Travel",
  "Fashion",
];

function Categories() {
  return (
    <Card>
      <CardBody>
        {categories.map((category, index) => (
          <Link
            key={index}
            href={`/category/${category}`}
            className="hover:ml-1"
          >
            {category}
          </Link>
        ))}
      </CardBody>
    </Card>
  );
}

export default Categories;
