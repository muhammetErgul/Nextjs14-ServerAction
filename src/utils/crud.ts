"use server";
import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";

// get data and read

export async function getData() {
  const data = await prisma.todo.findMany({
    select: {
      input: true,
      id: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}

// create todo
export async function create(prevState: any, formData: FormData) {
  "use server";

  try {
    const input = formData.get("input") as string;
    const isExist = await prisma.todo.findFirst({
      where: {
        input: input,
      },
    });
    if (isExist) {
      return { message: "ToDo is already exist!" };
    }
    await prisma.todo.create({
      data: {
        input: input,
      },
    });
    revalidatePath("/");
  } catch (error) {
    return { message: "Failed to Created" };
  }
}

// edit todo
export async function edit(formData: FormData) {
  "use server";

  try {
    const input = formData.get("input") as string;
    const inputId = formData.get("inputId") as string;

    await prisma.todo.update({
      where: {
        id: inputId,
      },
      data: {
        input: input.slice(2, input.length),
      },
    });
    revalidatePath("/");
  } catch (error) {
    console.log("Failed to edited");
  }
}
// remove todo
export async function remove(formData: FormData) {
  "use server";
  try {
    const inputId = formData.get("inputId") as string;

    await prisma.todo.delete({
      where: {
        id: inputId,
      },
    });
    revalidatePath("/");
  } catch (error) {
    console.log("Failed to removed");
  }
}

export async function filterItem(formData: FormData) {
  "use server";

  try {
    const input = formData.get("input") as string;
    const data = await prisma.todo.findMany({
      where: {
        input: {
          contains: input,
        },
      },
    });
    return data;
  } catch (error) {
    console.log("Failed to Filtered");
  }
}
