const STORE_KEY = 'forma-library-admin-v1';
const categoryNames = { commerce: 'Commerce', work: 'Work & teams', personal: 'Personal', content: 'Content', services: 'Services' };
const categoryIcons = { commerce: '↗', work: '⌘', personal: '✳', content: '◉', services: '◇' };
let templates = [];
let currentFilter = 'all';
let query = '';
let overrides = {};
const $ = selector => document.querySelector(selector);
const esc = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
function loadOverrides() {
  try { overrides = JSON.parse(localStorage.getItem(STORE_KEY) || '{}'); if (!overrides || typeof overrides !== 'object') overrides = {}; }
  catch { overrides = {}; }
}
function titleFor(item) { return overrides[item.id]?.title || item.name; }
function visibleTemplates() {
  return templates.filter(item => {
    const title = titleFor(item).toLowerCase();
    const haystack = `${title} ${item.id} ${categoryNames[item.category]} ${item.description}`.toLowerCase();
    return (currentFilter === 'all' || item.category === currentFilter) && (!query || haystack.includes(query));
  });
}
function renderCards() {
  const items = visibleTemplates();
  $('#cards').innerHTML = items.map(item => {
    const launch = item.url
      ? `<a class="launch-link" href="${esc(item.url)}" target="_blank" rel="noopener noreferrer">Open public site <span>↗</span></a>`
      : '<span class="launch-link disabled" aria-disabled="true">Awaiting deployment</span>';
    return `<article class="card"><div class="card-top"><span class="card-number">${esc(item.number)} / 50</span><span class="card-icon" aria-hidden="true">${categoryIcons[item.category] || '✳'}</span>${overrides[item.id]?.featured ? '<span class="featured">FEATURED</span>' : ''}</div><h3>${esc(titleFor(item))}</h3><p>${esc(item.description)}</p><div class="card-bottom"><span class="category-tag">${esc(categoryNames[item.category] || 'Product')}</span>${launch}</div></article>`;
  }).join('');
  $('#count-line').innerHTML = `Showing <b>${items.length}</b> of 50 foundations <span>↘</span>`;
  $('#empty').classList.toggle('hidden', items.length !== 0);
}
function saveOverrides() { try { localStorage.setItem(STORE_KEY, JSON.stringify(overrides)); } catch { toast('Browser storage is unavailable.'); } }
function renderAdmin() {
  const sorted = [...templates].sort((a, b) => a.number.localeCompare(b.number));
  $('#admin-total').textContent = `${templates.length} ITEMS`;
  $('#admin-list').innerHTML = sorted.map(item => `<div class="admin-row"><span>${esc(item.number)}</span><label for="edit-${esc(item.id)}">${esc(item.name)}</label><input id="edit-${esc(item.id)}" data-id="${esc(item.id)}" aria-label="Display title for ${esc(item.name)}" maxlength="70" value="${esc(titleFor(item))}"></div>`).join('');
  $('#admin-list').querySelectorAll('input').forEach(input => input.addEventListener('input', event => {
    const id = event.target.dataset.id;
    const base = templates.find(item => item.id === id);
    const value = event.target.value.trim();
    if (value && value !== base.name) overrides[id] = { ...(overrides[id] || {}), title: value };
    else if (overrides[id]) { delete overrides[id].title; if (!Object.keys(overrides[id]).length) delete overrides[id]; }
    saveOverrides(); renderCards();
  }));
}
function toast(message) {
  let node = $('.toast');
  if (!node) { node = document.createElement('div'); node.className = 'toast'; document.body.append(node); }
  node.textContent = message; node.classList.add('show'); clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => node.classList.remove('show'), 2200);
}
function openAdmin() { renderAdmin(); $('#admin-drawer').classList.add('open'); $('#admin-drawer').setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden'; setTimeout(() => $('#admin-drawer .icon-button').focus(), 60); }
function closeAdmin() { const drawer = $('#admin-drawer'); drawer.classList.remove('open'); drawer.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; $('#admin-open').focus(); }
fetch('/assets/templates.json').then(response => { if (!response.ok) throw new Error('catalog data unavailable'); return response.json(); }).then(data => { templates = data; loadOverrides(); renderCards(); }).catch(() => { $('#cards').innerHTML = '<p class="empty">The library data could not be loaded. Refresh to try again.</p>'; });
$('#search').addEventListener('input', event => { query = event.target.value.toLowerCase().trim(); renderCards(); });
$('#filters').addEventListener('click', event => { const button = event.target.closest('[data-filter]'); if (!button) return; currentFilter = button.dataset.filter; document.querySelectorAll('.filter').forEach(item => item.classList.toggle('active', item === button)); renderCards(); });
$('#admin-open').addEventListener('click', openAdmin);
document.querySelectorAll('[data-close]').forEach(element => element.addEventListener('click', closeAdmin));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && $('#admin-drawer').classList.contains('open')) closeAdmin(); if (event.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) { event.preventDefault(); $('#search').focus(); } });
$('#export-settings').addEventListener('click', () => { const blob = new Blob([JSON.stringify({ notice: 'Local browser settings only; importing does not deploy site changes.', overrides }, null, 2)], { type: 'application/json' }); const anchor = document.createElement('a'); anchor.href = URL.createObjectURL(blob); anchor.download = 'forma-local-admin-settings.json'; anchor.click(); URL.revokeObjectURL(anchor.href); toast('Settings exported from this browser.'); });
$('#reset-settings').addEventListener('click', () => { if (!confirm('Reset display-title edits saved in this browser? This does not affect the live website.')) return; localStorage.removeItem(STORE_KEY); overrides = {}; renderCards(); renderAdmin(); toast('This browser has been reset.'); });
