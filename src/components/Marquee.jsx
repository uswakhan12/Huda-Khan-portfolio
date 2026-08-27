import React from 'react'

export default function Marquee({ items = [] }) {
  const sequence = items.flatMap((item) => [item, 'SEP'])
  // Repeat so each group is always wider than the screen
  const group = [...sequence, ...sequence, ...sequence, ...sequence]

  const renderGroup = (keyPrefix) =>
    group.map((item, i) =>
      item === 'SEP' ? (
        <span key={`${keyPrefix}-s-${i}`} className="marquee-sep" />
      ) : (
        <span key={`${keyPrefix}-w-${i}`} className="marquee-word">
          {item}
        </span>
      )
    )

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        <div className="marquee-group">{renderGroup('a')}</div>
        <div className="marquee-group">{renderGroup('b')}</div>
      </div>
    </div>
  )
}
