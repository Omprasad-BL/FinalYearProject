import { pgTable ,serial, text} from "drizzle-orm/pg-core";

export const courses=pgTable("courses",{
    id:serial("id").primaryKey(),
    title:text("text").notNull(),   
    imageSrc:text("image_src").notNull(),

})