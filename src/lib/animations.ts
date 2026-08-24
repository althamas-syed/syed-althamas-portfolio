import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { initLenis } from './lenis'

gsap.registerPlugin(ScrollTrigger)

function splitWords(el: HTMLElement): HTMLElement[] {
  const nodes = Array.from(el.childNodes)
  el.textContent = ''
  const inners: HTMLElement[] = []
  nodes.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const words = (node.textContent ?? '').split(/(\s+)/)
      words.forEach((w) => {
        if (/^\s*$/.test(w)) {
          el.appendChild(document.createTextNode(w))
          return
        }
        const span = document.createElement('span')
        span.className = 'inline-block overflow-hidden align-bottom'
        const inner = document.createElement('span')
        inner.className = 'inline-block will-change-transform'
        inner.textContent = w
        span.appendChild(inner)
        el.appendChild(span)
        inners.push(inner)
      })
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const child = node as HTMLElement
      child.classList.add('inline-block', 'will-change-transform')
      const span = document.createElement('span')
      span.className = 'inline-block overflow-hidden align-bottom'
      span.appendChild(child)
      el.appendChild(span)
      inners.push(child)
    }
  })
  return inners
}

export function initAnimations() {
  initLenis()
  const ctx = gsap.context(() => {
    gsap.utils.toArray<HTMLElement>('[data-split]').forEach((el) => {
      const inners = splitWords(el)
      gsap.fromTo(
        inners,
        { yPercent: 120, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1,
          ease: 'power4.out',
          stagger: 0.045,
          scrollTrigger: { trigger: el, start: 'top 85%', once: true },
        },
      )
    })

    gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
      gsap.fromTo(
        el,
        { y: 46, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        },
      )
    })

    gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
      const speed = parseFloat(el.dataset.parallax || '10') || 10
      gsap.fromTo(
        el,
        { yPercent: speed },
        {
          yPercent: -speed,
          ease: 'none',
          scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
        },
      )
    })

    gsap.utils.toArray<HTMLElement>('[data-count]').forEach((el) => {
      const target = parseFloat(el.dataset.count || '0')
      const decimals = parseInt(el.dataset.decimals || '0', 10)
      const prefix = el.dataset.prefix || ''
      const suffix = el.dataset.suffix || ''
      const obj = { v: 0 }
      gsap.to(obj, {
        v: target,
        duration: 1.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 92%', once: true },
        onUpdate: () => {
          el.textContent = `${prefix}${obj.v.toFixed(decimals)}${suffix}`
        },
      })
    })
  })

  const refresh = () => ScrollTrigger.refresh()
  window.addEventListener('load', refresh)
  const t = window.setTimeout(refresh, 1500)

  return {
    revert() {
      window.removeEventListener('load', refresh)
      window.clearTimeout(t)
      ctx.revert()
    },
  }
}
