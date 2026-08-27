import React from 'react'

const icons = {
  collaboration: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M14 28c-3.5 1.2-6 4.2-6 7.8V38h12v-2.2c0-2.4 1-4.5 2.6-6"
        stroke="#4a3f35"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M34 28c3.5 1.2 6 4.2 6 7.8V38H28v-2.2c0-2.4-1-4.5-2.6-6"
        stroke="#8a7355"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="18" cy="16" r="5" stroke="#4a3f35" strokeWidth="2.2" fill="rgba(74,63,53,0.1)" />
      <circle cx="30" cy="16" r="5" stroke="#8a7355" strokeWidth="2.2" fill="rgba(138,115,85,0.14)" />
      <path d="M22 18c1.5 1.8 2.5 1.8 4 0" stroke="#b08968" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M18 28h12" stroke="#b08968" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M21 28v4M27 28v4" stroke="#b08968" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  ),
  education: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M8 20 24 12l16 8-16 8L8 20Z" stroke="#4a3f35" strokeWidth="2.2" strokeLinejoin="round" fill="rgba(74,63,53,0.1)" />
      <path d="M14 23v9c0 1.5 4.5 4 10 4s10-2.5 10-4v-9" stroke="#8a7355" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M40 20v12" stroke="#b08968" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="40" cy="34" r="2.2" fill="#b08968" />
    </svg>
  ),
  mentorship: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="18" cy="15" r="5" stroke="#4a3f35" strokeWidth="2.2" fill="rgba(74,63,53,0.12)" />
      <circle cx="33" cy="18" r="4" stroke="#8a7355" strokeWidth="2.2" fill="rgba(138,115,85,0.14)" />
      <path d="M8 36c1.5-6 5.5-9 10-9s8.5 3 10 9" stroke="#4a3f35" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M28 34c1-4 3.8-6.5 7-6.5 2.2 0 4 .8 5.5 2.5" stroke="#8a7355" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M24 22c2.5 1.5 5 1.5 8 0" stroke="#b08968" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  ),
  career: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M10 34h8v6H10z" fill="rgba(74,63,53,0.14)" stroke="#4a3f35" strokeWidth="2" />
      <path d="M20 26h8v14h-8z" fill="rgba(138,115,85,0.16)" stroke="#8a7355" strokeWidth="2" />
      <path d="M30 16h8v24h-8z" fill="rgba(176,137,104,0.18)" stroke="#b08968" strokeWidth="2" />
      <path d="M12 22l10-8 8 5 10-10" stroke="#4a3f35" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M34 9h6v6" stroke="#b08968" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  talent: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M24 8l3.4 9.6H38l-8.2 5.8 3.2 9.6L24 27.4 15 33l3.2-9.6L10 17.6h10.6L24 8Z"
        stroke="#8a7355"
        strokeWidth="2.2"
        strokeLinejoin="round"
        fill="rgba(138,115,85,0.18)"
      />
      <circle cx="24" cy="22" r="2.2" fill="#b08968" />
    </svg>
  ),
  culture: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M10 38V20l14-10 14 10v18" stroke="#4a3f35" strokeWidth="2.2" strokeLinejoin="round" fill="rgba(74,63,53,0.08)" />
      <path d="M20 38V26h8v12" stroke="#8a7355" strokeWidth="2.2" strokeLinejoin="round" fill="rgba(138,115,85,0.14)" />
      <path d="M16 22h4M28 22h4M22 16h4" stroke="#b08968" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  ),
  diversity: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="14" stroke="#4a3f35" strokeWidth="2.2" fill="rgba(74,63,53,0.06)" />
      <path d="M24 10c3.5 4 5.5 8.5 5.5 14S27.5 34 24 38c-3.5-4-5.5-8.5-5.5-14S20.5 14 24 10Z" stroke="#8a7355" strokeWidth="2.2" fill="rgba(138,115,85,0.1)" />
      <path d="M10 24h28" stroke="#b08968" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M12.5 17h23M12.5 31h23" stroke="#4a3f35" strokeWidth="1.8" strokeLinecap="round" opacity="0.85" />
    </svg>
  )
}

export default function PriorityIcon({ name, className = '' }) {
  return <span className={`priority-icon ${className}`.trim()}>{icons[name] || icons.collaboration}</span>
}
