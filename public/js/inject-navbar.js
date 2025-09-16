const e = [
    { n: 'Home',        h: '#home',     i: 'fa-house' },
    { n: 'Features',    h: '#features', i: 'fa-shapes' },
    { n: 'About me',    h: '#about',    i: 'fa-user' },
    { n: 'My Blog',     h: '#blog',     i: 'fa-blog' },
    { n: 'My History',  h: '#history',  i: 'fa-clock-rotate-left' },
    { n: 'Look my Photos', h: '#photos', i: 'fa-camera' },
    { n: 'Get in Touch!',  h: '#contact', i: 'fa-envelope' },
    { n: 'Download',    h: '#', i: 'fa-download' },
];

const li = document.getElementById('menuList');
li.innerHTML = e.map(item => `
    <li>
      <a href="${item.h}" class="group flex items-center justify-between gap-3 px-4 py-3 rounded hover:bg-white/10 focus:outline-none">
        <span class="flex items-center gap-3">
          <i class="fa-solid ${item.i} text-white w-5 text-center"></i>
          <span class="roboto">${item.n}</span>
        </span>
        <i class="fa-solid fa-chevron-right text-white/40 group-hover:text-white"></i>
      </a>
    </li>
`).join('');