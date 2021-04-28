interface Engineer {
  name: string;
  role: string;
}

interface Blogger {
  name: string;
  follower: number;
}

interface EngineerBlogger extends Engineer, Blogger {}
const quill: EngineerBlogger = {
  name: 'Quill',
  role: 'front-end',
  follower: 1000
} 

type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber;