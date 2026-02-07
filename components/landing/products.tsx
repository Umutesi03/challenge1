"use client"
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import Image from "next/image";

// Step 1: define types that match recipe.json
interface Recipe {
  id: number;
  title: string;
  image: string;
  rating: number;
  prepTime: number;
  servings: number;
  calories: number;
  difficulty: string;
}

interface Category {
  id: number;
  name: string;
  recipes: Recipe[];
}

interface RecipeData {
  categories: Category[];
}

export default function RecipeGrid() {
  // Step 2: state to store JSON data
  const [data, setData] = useState<RecipeData | null>(null);

  // Step 3: fetch JSON from public/data/recipe.json
  useEffect(() => {
    fetch("/data/recipe.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Failed to load recipes", err));
  }, []);

  // Step 4: handle loading state
  if (!data) {
    return <p>Loading recipes...</p>;
  }

  // Step 5: render categories and recipes
  return (
    <div>
      {data.categories.map((category) => (
        <section key={category.id}>
          <h2>{category.name}</h2>

          <div>
            {category.recipes.map((recipe) => (
              <Card key={recipe.id}>
                <Image src={recipe.image} alt={recipe.title} width={800} height={800} />

                <CardContent>
                  <h3>{recipe.title}</h3>

                  <Badge>{recipe.difficulty}</Badge>

                  <div>
                    <Star />
                    <span>{recipe.rating}</span>
                  </div>

                  <div>
                    <span>{recipe.prepTime} min</span>
                    <span>{recipe.calories} cal</span>
                    <span>{recipe.servings} servings</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
