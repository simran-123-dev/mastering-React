# 📘 Tailwind CSS Notes

A clean and structured reference for commonly used Tailwind CSS utility classes.

---

## 📐 1. Layout

### Flexbox
- `flex` → Enable flexbox  
- `flex-row` → Horizontal layout  
- `flex-col` → Vertical layout  
- `flex-wrap` → Allow wrapping  

### Alignment
- `justify-start` → Left  
- `justify-center` → Center  
- `justify-end` → Right  
- `justify-between` → Space between  

- `items-start` → Top  
- `items-center` → Center  
- `items-end` → Bottom  

### Grid
- `grid` → Enable grid  
- `grid-cols-2` → 2 columns  
- `grid-cols-3` → 3 columns  
- `gap-4` → Space between items  

---

## 📏 2. Sizing

### Width
- `w-full` → 100%  
- `w-1/2` → 50%  
- `w-1/3` → 33%  
- `w-64` → Fixed width  

### Height
- `h-full` → Parent height  
- `h-screen` → Full screen (100vh)  
- `h-64` → Fixed height  

---

## 📦 3. Spacing

### Padding
- `p-4` → All sides  
- `px-6` → Left & Right  
- `py-2` → Top & Bottom  

### Margin
- `m-4` → All sides  
- `mt-10` → Top margin  
- `mx-auto` → Center horizontally  

---

## 🔤 4. Typography

### Font Size
- `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-4xl`

### Font Weight
- `font-light`, `font-medium`, `font-bold`

### Alignment
- `text-left`, `text-center`, `text-right`

### Style
- `uppercase`, `italic`

### Color
- `text-white`, `text-black`, `text-zinc-400`, `text-blue-500`

---

## 🎨 5. Background & Borders

### Background
- `bg-blue-500`, `bg-red-500`, `bg-zinc-100`  
- `bg-transparent`

### Border
- `border` → Default  
- `border-2` → Thickness  
- `border-zinc-300` → Color  

### Radius
- `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-full`

---

## ✨ 6. Effects

### Shadow
- `shadow-sm`, `shadow-md`, `shadow-lg`

### Opacity
- `opacity-50`, `opacity-75`, `opacity-100`

### Hover
- `hover:bg-red-500`  
- `hover:text-white`

### Transition
- `transition-all`  
- `duration-300`  
- `ease-in-out`

---

## 📱 7. Responsive Design

| Prefix | Screen Size |
|--------|------------|
| sm:    | ≥ 640px    |
| md:    | ≥ 768px    |
| lg:    | ≥ 1024px   |
| xl:    | ≥ 1280px   |

### Example
```html
<div class="text-sm md:text-lg lg:text-2xl">
  Responsive Text
</div>
<div class="flex items-center justify-center h-screen bg-zinc-100">
  <div class="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
    <h2 class="text-xl font-bold mb-2">Card Title</h2>
    <p class="text-zinc-500 mb-4">This is a simple Tailwind card.</p>
    <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all">
      Click Me
    </button>
  </div>
</div>
