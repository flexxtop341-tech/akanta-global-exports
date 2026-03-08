
## Animated Hero Section with Pen Illustrations

### Current State
The hero section (lines 270-320) uses a looping background video (`/hero-video.mp4`) with text overlay and CTA buttons.

### Proposed Design
Replace the video with an **animated SVG/illustration-based hero** featuring creative pen visuals:

#### Visual Elements
1. **Animated Pen Illustrations**
   - 3-4 floating pen SVG illustrations at different sizes and angles
   - Continuous subtle rotation and floating animations using framer-motion
   - Pens positioned across the hero area with parallax-like depth effect

2. **Dynamic Background**
   - Navy gradient background (`from-primary-dark via-primary to-primary`)
   - Animated gold particle/dot pattern overlay
   - Radial glow effects behind key elements

3. **Ink Flow Animation**
   - SVG path animation simulating ink flowing/writing
   - Gold accent lines that draw themselves on load

4. **Pen Writing Trail**
   - Animated cursive line that "writes" across the section
   - Creates visual storytelling of writing instruments

#### Animation Details
- Pens: `animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}` with staggered delays
- Gold particles: Floating dots with random movement
- Ink trail: `strokeDasharray` animation drawing the path
- Text: Existing fade-up animations preserved

#### Layout
- Left side: Text content (title, description, CTAs) - unchanged
- Right side & background: Animated pen illustrations
- Full-bleed design maintaining current `min-h-[85vh]`

### Technical Approach
- Create inline SVG pen illustrations (stylized, not complex)
- Use framer-motion for all animations
- Layer multiple animated elements for depth
- Maintain responsive design with different pen positions on mobile

### Files to Modify
- `src/pages/Index.tsx` - Replace video hero with animated illustration section
