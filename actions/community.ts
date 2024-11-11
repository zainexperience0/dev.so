
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

export const initialCommunity = async () => {
    const user = await currentUser();
    const community = await db.community.findFirst({
        where: {
            userId: user?.id,
        },
        select: {
            url: true,
        },
    });
    return community;
}