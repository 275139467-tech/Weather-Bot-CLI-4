const ICONS = {
  Clear: '\\   /\\n .-. \\n- ( ) -\\n `-` \\n/   \\\\',
  Clouds: '     .--.\\n  .-(    ).\\n (___.__)__)',
  Rain: '     .-.\\n    (   ).\\n   (___(__)\\n    ʻ ʻ ʻ'
};

export function iconFor(condition) {
  return ICONS[condition] ?? '';
}
