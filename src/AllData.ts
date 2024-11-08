import a from '../src/pic/c1.png'
import b from '../src/pic/c2.png'
import c from '../src/pic/c3.png'
import d from '../src/pic/c4.png'
import e from '../src/pic/ca.png'
import f from '../src/pic/cat.png'
import g from '../src/pic/cat1.png'
import h from '../src/pic/cat5.png'
import i from '../src/pic/ma.jpg'
import j from '../src/pic/ma1.jpg'
import k from '../src/pic/man.jpg'
import m from '../src/pic/st.jpg'
import n from '../src/pic/stu.jpg'
import o from '../src/pic/stu1.jpg'
import p from '../src/pic/stu2.jpg'
import q from '../src/pic/stu3.jpg'
import r from '../src/pic/stu4.jpg'
import s from '../src/pic/stu6.jpg'
import t from '../src/pic/stu7.jpg'
import u from '../src/pic/stu8.jpg'



// Add other file types if needed


type Path = {
  path: string;
  name: string;
};

type Icon = {
  id: number,
  ico: any
}

type Academics = {
  id: number,
  head: string,
  para: string,
  pic: string,
}

export const Paths : Path[] = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/academics",
    name: "Academics",
  },
  {
    path: "/blog",
    name: "Blog",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/gallery",
    name: "Gallery",
  },
  {
    path: "/contact",
    name: "Contact",
  },
]

export const Ico : Icon[] = [
  {
    id: 1,
    ico: a,
  },
  {
    id: 2,
    ico: b,
  },
  {
    id: 3,
    ico: c,
  },
  {
    id: 4,
    ico: d,
  }
]

export const Acad : Academics[] = [
  {
    id: 1,
    head: "Our Classrooms",
    para: "Our Classrooms are equipped with full multi-media interactive White boards",
    pic: f,
  },
  {
    id: 2,
    head: "Our multi-sport complex",
    para: "Our multi-sport complex will accomodate major sports games such as soccer, basketball, volleyball, lawn tennis, badminton e.t.c with other track and field events.",
    pic: h,
  },
  {
    id: 3,
    head: "School Library",
    para: "The school library houses over 15,000 books in different titles and formats, with our E-library that contributes to the enhanced student learning by providing innovative programs and services which support teaching and learning in the school.",
    pic: g,
  },
]

export const Abot = [
  {
    id: 1,
    head: "why choose us",
    para: "Wisdom International School, Ihiagwa provides an all-inclusive system of education that support the student learning in every way, and ensure the well-being of all in the community.",
    pic: f,
  },
  {
    id: 2,
    head: "Our Mission",
    para: "To provide International Education in a conducive Environment Optimizing the full potentials of our students to become global citizens.",
    pic: e,
  },
  {
    id: 3,
    head: "Our vision",
    para: "To be a world class International School, inspiring students to be problem solvers.",
    pic: h,
  },
]

export const Sector = [
  {
    id: 1,
    head: "Science Laboratory",
    para: "Our facilities are second to none as we have taken time to carefully provide standard Science and Technology Laboratories.",
    pic: e,
  },
  {
    id: 2,
    head: "Our multi-sport complex",
    para: "Our multi-sport complex accommodates major sports games such as soccer, basketball, volleyball, lawn tennis, badminton e.t.c with other track and field events.",
    pic: f,
  }
]

export const Skill = [
  {
    id: 1,
    para: "An investment in knowledge pays the best interest",
    pic: m,
  },
  {
    id: 2,
    para: "The more that you read, the more things you will know. The more that you learn, the more places you'll go",
    pic: n,
  },
  {
    id: 3,
    para: "The function of education is to teach one to think intensively and to think critically. Intelligence plus character - that is the goal of true education.",
    pic: o,
  },
  {
    id: 4,
    para: "The more that you read, the more things you will know. The more that you learn, the more places you'll go",
    pic: p,
  }
]

export const Lean = [
  {
    id: 1,
    head: "Innovative Thinking",
    para: "We focus on educational innovation and challenging traditional paradigms through research and innovative program.",
    pic: m,
  },
  {
    id: 2,
    head: "Individual Focus",
    para: "With a focus on the whole child, we promote and foster individual passions, talents and aspirations.",
    pic: n,
  },
  {
    id: 3,
    head: "learning communities",
    para: "Our campuses ensure learning communities.",
    pic: q,
  }
]


type BlogData = {
  id: number,
  head: string,
  pic: string,
  para: string,
}

export const Blo : BlogData[] = [
  {
    id: 1,
    head: "Innovative Thinking",
    para: "We focus on educational innovation and challenging traditional paradigms through research and innovative program.",
    pic: i,
  },
  {
    id: 2,
    head: "Individual Focus",
    para: "With a focus on the whole child, we promote and foster individual passions, talents and aspirations.",
    pic: j,
  },
  {
    id: 3,
    head: "learning communities",
    para: "Our campuses ensure learning communities.",
    pic: k,
  }
]

export const Skeme = [
  {
    id: 1,
    head: "20th - 24th June, 2024",
    para: "Mid-term break",
  },
  {
    id: 2,
    head: "20th July, 2024",
    para: "Quiz competition",
  },
  {
    id: 3,
    head: "18th July, 2024",
    para: "Inter house sports",
  },
  {
    id: 4,
    head: "28th July, 2024",
    para: "Debate competiton",
  },
  {
    id: 5,
    head: "19th July, 2024",
    para: "open/cultural day",
  },
  {
    id: 6,
    head: "28rd - 28th, july",
    para: "Examinations",
  }
]

type GalleryImage = {
  id: number,
  img: string,
  cat: string,
}

export const Images : GalleryImage[] = [
  {
    id: 1,
    img: n,
    cat: "GroupA"
  },
  {
    id: 2,
    img: m,
    cat: "GroupA"
  },
  {
    id: 3,
    img: o,
    cat: "GroupA"
  },
  {
    id: 4,
    img: p,
    cat: "GroupB"
  },
  {
    id: 5,
    img: q,
    cat: "GroupB"
  },
  {
    id: 6,
    img: r,
    cat: "GroupA"
  },
  {
    id: 7,
    img: s,
    cat: "GroupB"
  },
  {
    id: 8,
    img: t,
    cat: "GroupB"
  },
  {
    id: 9,
    img: u,
    cat: "GroupB"
  },
  {
    id:10,
    img: m,
    cat: "GroupA"
  },
  {
    id: 11,
    img: n,
    cat: "GroupB"
  },
  {
    id: 12,
    img: r,
    cat: "GroupA"
  }
]

export const Option = [
  "All",
  "GroupA",
  "GroupB"
]

export const Slid = [
  {
    id: 1,
    head: "Why choose us",
    para: "Wisdom International School provides an all-inclusive system of education that support the student learning in every way, and ensure the well-being of all in the community.",
    pic: m,
  },
  {
    id: 2,
    head: "Our Mission",
    para: "To provide International Education in a conducive Environment Optimizing the full potentials of our students to become global citizens.",
    pic: j,
  },
  {
    id: 3,
    head: "Our vision",
    para: "To be a world class International School, inspiring students to be problem solvers.",
    pic: k,
  },
]