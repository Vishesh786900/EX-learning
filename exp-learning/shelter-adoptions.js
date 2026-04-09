const pets = [
  { name:"Biscuit",  type:"dog",    breed:"Golden Retriever",   age:"3 yrs", gender:"Male",   photo:"https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=600&q=80" },
  { name:"Luna",     type:"cat",    breed:"Domestic Shorthair", age:"2 yrs", gender:"Female", photo:"https://d3544la1u8djza.cloudfront.net/APHI/Blog/2022/02-11/gray+stripe+domestic+shortahair+tabby+cat+resting+in+a+maroon+cat+tree+bed-min.jpg" },
  { name:"Mochi",    type:"rabbit", breed:"Holland Lop",        age:"1 yr",  gender:"Female", photo:"https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=600&q=80" },
  { name:"Rocky",    type:"dog",    breed:"German Shepherd",    age:"5 yrs", gender:"Male",   photo:"https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=600&q=80" },
  { name:"Nala",     type:"cat",    breed:"Siamese",            age:"4 yrs", gender:"Female", photo:"https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=600&q=80" },
  { name:"Pepper",   type:"dog",    breed:"Beagle Mix",         age:"2 yrs", gender:"Female", photo:"https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=600&q=80" },
  { name:"Coco",     type:"rabbit", breed:"Angora",             age:"6 mos", gender:"Male",   photo:"https://www.zooplus.co.uk/magazine/wp-content/uploads/2022/03/white-angora-rabbit-on-grass-1536x1022.webp" },
  { name:"Olive",    type:"cat",    breed:"Maine Coon",         age:"3 yrs", gender:"Female", photo:"https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&q=80" },
  { name:"Duke",     type:"dog",    breed:"Labrador",           age:"1 yr",  gender:"Male",   photo:"https://img.lb.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/article_thumbnails/reference_guide/what_to_know_about_labrador_retriever_ref_guide/1800x1200_what_to_know_about_labrador_retriever_ref_guide.jpg?resize=750px:*&output-quality=75" },
  { name:"Maple",    type:"cat",    breed:"Scottish Fold",      age:"2 yrs", gender:"Female", photo:"https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=600&q=80" },
  { name:"Peanut",   type:"dog",    breed:"Corgi",              age:"4 yrs", gender:"Male",   photo:"https://images.unsplash.com/photo-1612536057832-2ff7ead58194?w=600&q=80" },
  { name:"Snowball", type:"rabbit", breed:"Flemish Giant",      age:"2 yrs", gender:"Male",   photo:"https://cdn-fastly.petguide.com/media/2022/02/16/8223314/continental-giant-rabbit.jpg?size=720x845&nocrop=1" },
  { name: "poppy", type: "dog", breed: "Poodle Mix", age: "2 yrs", gender: "Female", photo: "https://www.marthastewart.com/thmb/EzTb8eWlntfymwdbmyXh3bvtIA8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/MS_treatments_doodles_bernadoodle-getty-1123-9d79447ad1164ac6aa088de9e57cde51.jpg" },
  { name: "Whiskers", type: "cat", breed: "Ragdoll", age: "3 yrs", gender: "Male", photo: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=600&q=80" },
  { name: "Thumper", type: "rabbit", breed: "Netherland Dwarf", age: "1 yr", gender: "Male", photo: "https://images.squarespace-cdn.com/content/v1/5f11acca056d9b31bdc66141/1598022513541-D1RE9SV8BLR7S1RXGW7Z/greybabybunn.jpg?format=300w"   }
];

const calSvg = `<svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="1" y="3" width="14" height="12" rx="2"/><path d="M5 1v4M11 1v4M1 7h14"/></svg>`;
const genderSvg = `<svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor"><circle cx="8" cy="6" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8 10v5M5.5 13h5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`;

const grid = document.getElementById('grid');
const empty = document.getElementById('empty');
const countEl = document.getElementById('count');

pets.forEach((p, i) => {
  const card = document.createElement('div');
  card.className = 'card';
  card.dataset.type = p.type;
  card.style.animationDelay = (i * 50) + 'ms';
  card.innerHTML = `
    <div class="card-img-wrap">
      <img src="${p.photo}" alt="${p.name}" loading="lazy">
      <span class="type-badge badge-${p.type}">${p.type}</span>
      <span class="status-dot" title="Available"></span>
    </div>
    <div class="card-body">
      <div class="card-name">${p.name}</div>
      <div class="card-breed">${p.breed}</div>
      <div class="card-meta">
        <span class="meta-chip">${calSvg} ${p.age}</span>
        <span class="meta-chip">${genderSvg} ${p.gender}</span>
      </div>
      <button class="adopt-btn" onclick="alert('Starting adoption inquiry for ${p.name}! In a real shelter app, this would open a contact or application form.')">Inquire about ${p.name}</button>
    </div>`;
  grid.appendChild(card);
});

function filter(type) {
  const cards = document.querySelectorAll('.card[data-type]');
  let visible = 0;

  cards.forEach(card => {
    const show = type === 'all' || card.dataset.type === type;
    card.classList.toggle('hidden', !show);
    if (show) visible++;
  });

  countEl.textContent = visible;
  empty.classList.toggle('show', visible === 0);
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    filter(btn.dataset.filter);
  });
});
