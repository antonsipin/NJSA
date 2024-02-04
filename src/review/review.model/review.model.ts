import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export interface ReviewModel extends Base {}
export class ReviewModel extends TimeStamps {
  name: string;
  title: string;
  description: string;
  rating: string;
  createdAt: Date;
}
