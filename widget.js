(function () {
  'use strict';

  // ── CSS ─────────────────────────────────────────────────────────────────────
  var css = [
    '#asw*,#asw *::before,#asw *::after{box-sizing:border-box;margin:0;padding:0}',
    '#asw{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:inline-block}',

    '#asw .widget{width:380px;min-height:540px;background:rgb(255,230,155);border-radius:20px;box-shadow:0 8px 40px rgba(0,0,0,.12),0 2px 8px rgba(0,0,0,.06);overflow:hidden;display:flex;flex-direction:column;position:relative}',

    '#asw .btn-restart{position:absolute;bottom:14px;right:14px;width:34px;height:34px;border-radius:50%;background:rgba(0,0,0,.08);border:none;cursor:pointer;display:none;align-items:center;justify-content:center;transition:background .15s,transform .2s;color:#000}',
    '#asw .btn-restart:hover{background:rgba(0,0,0,.16);transform:rotate(45deg)}',
    '#asw .btn-restart svg{width:16px;height:16px;flex-shrink:0}',

    '#asw .widget-header{background:rgb(255,204,51);padding:20px 24px 18px;color:#000;flex-shrink:0}',
    '#asw .widget-header h1{font-size:16px;font-weight:700;letter-spacing:.2px}',
    '#asw .widget-header p{font-size:12.5px;opacity:.72}',

    '#asw .widget-body{flex:1;padding:24px;display:flex;flex-direction:column;overflow-y:auto}',

    '#asw .start-screen{display:flex;flex-direction:column;align-items:center;text-align:center;flex:1;justify-content:center}',
    '#asw .start-screen h2{font-size:18px;font-weight:700;color:#0f172a;margin-bottom:10px;line-height:1.35}',
    '#asw .start-screen p{font-size:13.5px;color:#000;margin-bottom:28px;line-height:1.65;max-width:270px}',
    '#asw .btn-start{background:rgb(255,204,51);color:#000;border:none;border-radius:13px;padding:14px 44px;font-size:15px;font-weight:600;cursor:pointer;font-family:inherit;transition:all .18s;letter-spacing:.2px}',
    '#asw .btn-start:hover{transform:translateY(-2px);background:#eff6ff;color:#1e40af}',
    '#asw .btn-start:active{transform:translateY(0)}',

    '#asw .question-text{font-size:15.5px;font-weight:700;color:#0f172a;margin-bottom:20px;line-height:1.5}',
    '#asw .options-list{display:flex;flex-direction:column;gap:8px;flex:1}',
    '#asw .option-btn{background:rgb(255,204,51);border:0 solid #e2e8f0;border-radius:12px;padding:12px 16px;text-align:left;font-size:13.5px;color:#000;cursor:pointer;transition:all .14s ease;font-family:inherit;line-height:1.45;display:flex;align-items:center;gap:10px;width:100%}',
    '#asw .option-dot{width:8px;height:8px;border:2px solid #000;border-radius:50%;flex-shrink:0;transition:all .14s}',
    '#asw .option-btn:hover{background:#eff6ff;border-color:#2563eb;color:#1e40af;transform:translateX(3px)}',
    '#asw .option-btn:hover .option-dot{border-color:#2563eb;background:#2563eb}',
    '#asw .option-btn:active{transform:translateX(1px);background:#dbeafe}',

    '#asw .input-label{font-size:11.5px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:.6px;margin-bottom:8px}',
    '#asw .input-field{width:100%;padding:13px 16px;border:1.5px solid #e2e8f0;border-radius:12px;font-size:15px;font-family:inherit;color:#0f172a;margin-bottom:12px;background:#f8fafc;transition:border-color .15s,box-shadow .15s;-moz-appearance:textfield;appearance:textfield}',
    '#asw .input-field::-webkit-inner-spin-button,#asw .input-field::-webkit-outer-spin-button{-webkit-appearance:none}',
    '#asw .input-field:focus{outline:none;border-color:#2563eb;box-shadow:0 0 0 3px rgba(37,99,235,.1);background:#fff}',
    '#asw .btn-next{background:rgb(255,204,51);color:#000;border:none;border-radius:12px;padding:13px 20px;font-size:14px;font-weight:600;cursor:pointer;width:100%;font-family:inherit;transition:all .15s}',
    '#asw .btn-next:hover{opacity:.9;transform:translateY(-1px)}',

    '#asw .result-box{background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:14px;padding:18px 20px;margin-bottom:18px;flex:1}',
    '#asw .result-box,#asw .result-box *{font-size:14px;color:#1e293b;line-height:1.75}',
    '#asw .result-box a{color:#2563eb;font-weight:600;text-decoration:none;border-bottom:1px solid rgba(37,99,235,.3);transition:border-color .15s}',
    '#asw .result-box a:hover{border-color:#2563eb}',
    '#asw .btn-reset{background:rgb(255,204,51);color:#000;border:none;border-radius:12px;padding:13px 20px;font-size:14px;font-weight:600;cursor:pointer;width:100%;font-family:inherit;transition:all .15s;letter-spacing:.2px}',
    '#asw .btn-reset:hover{background:#fff;transform:translateY(-1px)}',

    '#asw .nav-footer{display:flex;align-items:center;margin-top:16px;padding-top:14px;border-top:1px solid #f1f5f9}',
    '#asw .btn-back{background:none;border:none;color:#000;font-size:13px;cursor:pointer;padding:4px 0;display:flex;align-items:center;gap:6px;font-family:inherit;font-weight:500;transition:color .14s}',
    '#asw .btn-back:hover{color:#2563eb}',

    '@keyframes asw-fadeIn{from{opacity:0;transform:translateY(7px)}to{opacity:1;transform:translateY(0)}}',
    '#asw .animate-in{animation:asw-fadeIn .22s ease forwards}'
  ].join('\n');

  // ── INJECT STYLE ─────────────────────────────────────────────────────────────
  var styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  // ── INJECT HTML ──────────────────────────────────────────────────────────────
  var container = document.createElement('div');
  container.id = 'asw';
  container.innerHTML = [
    '<div class="widget">',
      '<div class="widget-header">',
        '<h1>Asystent budowlany</h1>',
        '<p>Dobierz właściwy wniosek budowlany</p>',
      '</div>',
      '<div class="widget-body"></div>',
      '<button class="btn-restart" title="Zacznij od nowa">',
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">',
          '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>',
          '<path d="M3 3v5h5"/>',
        '</svg>',
      '</button>',
    '</div>'
  ].join('');

  // Wstaw w element #asw-target jeśli istnieje, w przeciwnym razie na końcu body
  var target = document.getElementById('asw-target');
  if (target) {
    target.appendChild(container);
  } else {
    document.body.appendChild(container);
  }

  // ── REFERENCJE DO ELEMENTÓW ──────────────────────────────────────────────────
  var app        = container.querySelector('.widget-body');
  var restartBtn = container.querySelector('.btn-restart');

  // ── WYNIKI ───────────────────────────────────────────────────────────────────
  var RESULTS = {
    'PB-1':   'Wypełnij, podpisz i wyślij <br><a href="https://wnioski.gunb.gov.pl/#gunb_epb_1_pozwolenie_budowa" target="_blank">Wniosek o pozwolenie na budowę (PB-1)</a>',
    'PB-2':   'Wypełnij, podpisz i wyślij <br><a href="https://wnioski.gunb.gov.pl/#gunb_epb_2_zgloszenie_robot" target="_blank">Zgłoszenie robót budowlanych (PB-2)</a>',
    'PB-2a':  'Wypełnij, podpisz i wyślij <br><a href="https://wnioski.gunb.gov.pl/#epb_2a_przebudowa_70m2" target="_blank">Zgłoszenie budowy domu jednorodzinnego do 70 m² (PB-2a)</a>',
    'W0':     'Możesz budować bez formalności. Pamiętaj, że ostateczna decyzja zależy od lokalnego organu administracji architektoniczno-budowlanej, z którym warto to skonsultować.',
    'WWZ':    'Wyślij <br><a href="https://wnioski.gunb.gov.pl/#wniosek_wz" target="_blank">Wniosek o ustalenie lokalizacji inwestycji celu publicznego albo warunków zabudowy (WZ)</a>',
    'PB-3':   'Wypełnij, podpisz i wyślij <br><a href="https://wnioski.gunb.gov.pl/#gunb_epb_3_wniosek_rozbiorka" target="_blank">Wniosek o pozwolenie na rozbiórkę (PB-3)</a>',
    'PB-4':   'Wypełnij, podpisz i wyślij <br><a href="https://wnioski.gunb.gov.pl/#gunb_epb_4_zgloszenie_rozbiorka_" target="_blank">Zgłoszenie rozbiórki (PB-4)</a>',
    'K-1':    'Jeśli Twój obiekt został uszkodzony w wyniku działania żywiołu, wypełnij <br><a href="https://wnioski.gunb.gov.pl/#zgloszenie_odbudowy" target="_blank">Zgłoszenie odbudowy, remontu lub rozbiórki obiektu budowlanego (K-1)</a>',
    'PB-16':  'Wypełnij, podpisz i wyślij <br><a href="https://wnioski.gunb.gov.pl/#epb_zb_zakonczenie_budowy" target="_blank">Zawiadomienie o zakończeniu budowy (PB-16)</a>',
    'PB-16a': 'Wypełnij, podpisz i wyślij <br><a href="https://wnioski.gunb.gov.pl/#epb15_zb_zakonczenie_budowy" target="_blank">Zawiadomienie o zakończeniu budowy domu jednorodzinnego (PB-16a)</a>',
    'PB-17':  'Wypełnij, podpisz i wyślij <br><a href="https://wnioski.gunb.gov.pl/#epb_pnu_pozwolenie_na_uzytkowanie" target="_blank">Wniosek o pozwolenie na użytkowanie (PB-17)</a>',
    'PB-17a': 'Wypełnij, podpisz i wyślij <br><a href="https://wnioski.gunb.gov.pl/#epb17_pnu_pozwolenie_na_uzytkowanie" target="_blank">Wniosek o pozwolenie na użytkowanie przed zakończeniem budowy (PB-17a)</a>',
    'PB-18':  'Wypełnij, podpisz i wyślij <br><a href="https://wnioski.gunb.gov.pl/#epb_zsu_zmiana_spos_uzytk" target="_blank">Zgłoszenie zmiany sposobu użytkowania obiektu (PB-18)</a>',
    'PB-15':  'Wypełnij, podpisz i wyślij <br><a href="https://wnioski.gunb.gov.pl/#ePB1x_u" target="_blank">Wniosek o uproszczoną legalizację (PB-15)</a>',
    'PB-19':  'Wypełnij, podpisz i wyślij <br><a href="https://wnioski.gunb.gov.pl/#ePB1x_u" target="_blank">Wniosek o legalizację (PB-19)</a>',
    'PB-9':   'Wypełnij, podpisz i wyślij <br><a href="https://wnioski.gunb.gov.pl/#gunb_epb_6_przeniesienie_pozwolenie_budowa" target="_blank">Wniosek o przeniesienie decyzji o pozwoleniu na budowę (PB-9)</a>',
    'PB-10':  'Wypełnij, podpisz i wyślij <br><a href="https://wnioski.gunb.gov.pl/#epb_pdw_przen_dec_wzn" target="_blank">Wniosek o przeniesienie decyzji o pozwoleniu na wznowienie robót budowlanych (PB-10)</a>',
    'PB-11':  'Wypełnij, podpisz i wyślij <br><a href="https://wnioski.gunb.gov.pl/#gunb_epb_8_przeniesienie_praw_zgloszenie" target="_blank">Wniosek o przeniesienie praw i obowiązków wynikających ze zgłoszenia (PB-11)</a>',
    'PB-6':   'Wypełnij, podpisz i wyślij <br><a href="https://wnioski.gunb.gov.pl/#formularz_epb6" target="_blank">Wniosek o wydanie odrębnej decyzji o zatwierdzeniu projektu (PB-6)</a>',
    'PB-12':  'Wypełnij, podpisz i wyślij <br><a href="https://wnioski.gunb.gov.pl/#gunb_epb_9_zawiadomienie" target="_blank">Zawiadomienie o zamierzonym terminie rozpoczęcia robót budowlanych (PB-12)</a>',
    'PB-14':  'Wypełnij, podpisz i wyślij <br><a href="https://wnioski.gunb.gov.pl/#gunb_epb_10_wejscie_teren" target="_blank">Wniosek o wejście na sąsiadujący teren (PB-14)</a>',
    'PB-7':   'Wypełnij, podpisz i wyślij <br><a href="https://wnioski.gunb.gov.pl/#epb_wyd_dec_zmiana_pozw" target="_blank">Wniosek o zmianę pozwolenia na budowę (PB-7)</a>',
    'PB-13':  'Wypełnij, podpisz i wyślij <br><a href="https://wnioski.gunb.gov.pl/#epb_wsp_wylaczenie_stosowania_przepisow" target="_blank">Wniosek o wyłączenie niektórych obowiązków kierownika budowy (PB-13)</a>',
    'PB-5':   'Wypełnij, podpisz i wyślij <br><a href="https://wnioski.gunb.gov.pl/#gunb_epb_5_oswiadczenie" target="_blank">Oświadczenie PB-5</a>',
    'OŚ-1':   'Wypełnij, podpisz i wyślij <br><a href="https://wnioski.gunb.gov.pl/#osw_o_braku_sprzeciwu" target="_blank">Oświadczenie o braku sprzeciwu</a>',
    'OŚ-2':   'Wypełnij, podpisz i wyślij <br><a href="https://wnioski.gunb.gov.pl/#osw_o_dokonaniu_pomiarow" target="_blank">Oświadczenie o dokonaniu pomiarów</a>',
    'OŚ-3':   'Wypełnij, podpisz i wyślij <br><a href="https://wnioski.gunb.gov.pl/#osw_o_doprowadzeniu" target="_blank">Oświadczenie o doprowadzeniu do należytego stanu</a>',
    'OŚ-4':   'Wypełnij, podpisz i wyślij <br><a href="https://wnioski.gunb.gov.pl/#osw_o_zgodnosci" target="_blank">Oświadczenie o zgodności</a>',
    'OŚ-5':   'Jako projektant/-ka możesz potrzebować złożyć <br><a href="https://wnioski.gunb.gov.pl/#osw_o_sporzadzeniu_projektu_technicznego" target="_blank">Oświadczenie o sporządzeniu projektu technicznego zgodnie z obowiązującymi przepisami</a>',
    'OŚ-6':   'Jako geodeta/-ka możesz potrzebować złożyć <br><a href="https://wnioski.gunb.gov.pl/#info_geodety_o_zgodnosci" target="_blank">Informację osoby posiadającej uprawnienia w dziedzinie geodezji i kartografii o zgodności</a>',
    'WU':     'Wypełnij i wyślij <br><a href="https://wnioski.gunb.gov.pl/#epb_for_uzu" target="_blank">Uzupełnienie formularzy</a>',
    'WHELP':  'Wyślij wiadomość na adres <a href="mailto:e-budownictwo@gunb.gov.pl">e-budownictwo@gunb.gov.pl</a> — odpowiadają bardzo szybko!',
    'WINFO':  'Zadzwoń na Infolinię dla Obywatela: <strong>+48 22 295 51 28</strong><br>W dni robocze, godz. 10:00–13:00'
  };

  // ── DRZEWO PYTAŃ ─────────────────────────────────────────────────────────────
  var data = {
    Q2001: { text: 'Co chcesz zrobić?', options: [
      { label: 'Budowa',      next: 'Q2002a' },
      { label: 'Rozbiórka',   next: 'Q2017'  },
      { label: 'Zakończenie', next: 'Q2021'  },
      { label: 'Coś innego',  next: 'Q2025'  }
    ]},
    Q2002a: { text: 'Czego potrzebujesz?', options: [
      { label: 'Zgody organu na nową budowę',               next: 'Q2002b_plan' },
      { label: 'Zatwierdzenia samego projektu',             result: 'PB-6'      },
      { label: 'Zawiadomienia organu o rozpoczęciu budowy', result: 'PB-12'     },
      { label: 'Coś innego',                                next: 'Q2002b'      }
    ]},
    Q2002b: { text: 'Czego potrzebujesz?', options: [
      { label: 'Wejście na sąsiadujący teren',                          result: 'PB-14' },
      { label: 'Zmiana pozwolenia na budowę',                           result: 'PB-7'  },
      { label: 'Wyłączenie niektórych obowiązków kierownika budowy',    result: 'PB-13' }
    ]},
    Q2002b_plan: { text: 'Czy na działce jest ustalony plan miejscowy lub ogólny?', options: [
      { label: 'Tak', next: 'Q2003' }, { label: 'Nie', result: 'WWZ' }
    ]},
    Q2003: { text: 'Co budujesz?', options: [
      { label: 'Dom jednorodzinny', next: 'Q2004'  },
      { label: 'Dom do 70 m²',      next: 'Q2005'  },
      { label: 'Budynek publiczny', next: 'Q2006'  },
      { label: 'Coś innego',        next: 'Q2023b' }
    ]},
    Q2023b: { text: 'Co budujesz?', options: [
      { label: 'Sieć',       next: 'Q2007'  },
      { label: 'Schron',     next: 'Q2010'  },
      { label: 'Garaż',      next: 'Q2011'  },
      { label: 'Coś innego', next: 'Q2023c' }
    ]},
    Q2023c: { text: 'Co budujesz?', options: [
      { label: 'Wiata',               next: 'Q2012'  },
      { label: 'Budynek gospodarczy', next: 'Q2013'  },
      { label: 'Altana',              next: 'Q2014'  },
      { label: 'Coś innego',          next: 'Q2023d' }
    ]},
    Q2023d: { text: 'Co budujesz?', options: [
      { label: 'Budynek rolny',                                                 next: 'Q2015' },
      { label: 'Inny obiekt (zgłoszenie z art. 29 pkt 1 Prawa budowlanego)',  result: 'PB-2' }
    ]},
    Q2004: { text: 'Czy obszar oddziaływania budynku mieści się w całości na działce, na której go zaprojektowano?', options: [
      { label: 'Tak', result: 'PB-2' }, { label: 'Nie', result: 'PB-1' }
    ]},
    Q2005: { text: 'Czy planujesz budowę domu na własne potrzeby mieszkaniowe?', options: [
      { label: 'Tak', result: 'PB-2a' }, { label: 'Nie', result: 'PB-1' }, { label: 'Jeszcze nie wiem', result: 'PB-1' }
    ]},
    Q2006: { text: 'Czy to będzie wolno stojący, nie więcej niż dwukondygnacyjny budynek o powierzchni użytkowej ≤ 200 m²?', options: [
      { label: 'Tak', next: 'Q2004' }, { label: 'Nie', result: 'PB-1' }
    ]},
    Q2007: { text: 'Wybierz rodzaj sieci', options: [
      { label: 'Elektroenergetyczna',                    next: 'Q2008'  },
      { label: 'Wodociągowa, kanalizacyjna lub cieplna', result: 'PB-2' },
      { label: 'Gazowa',                                 next: 'Q2009'  },
      { label: 'Wodorowa',                               next: 'Q2009'  }
    ]},
    Q2008: { text: 'Czy napięcie znamionowe sieci nie przekracza 15 kV?', options: [
      { label: 'Tak', result: 'PB-2' }, { label: 'Nie', result: 'PB-1' }
    ]},
    Q2009: { text: 'Czy ciśnienie robocze sieci nie przekroczy 0,5 MPa?', options: [
      { label: 'Tak', result: 'PB-2' }, { label: 'Nie', result: 'PB-1' }
    ]},
    Q2010: { text: 'Czy powierzchnia użytkowa schronu nie przekracza 35 m²?', options: [
      { label: 'Tak', result: 'PB-2' }, { label: 'Nie', result: 'PB-1' }
    ]},
    Q2011: { text: 'Czy powierzchnia zabudowy nie przekroczy 35 m²?', options: [
      { label: 'Tak', result: 'PB-2' }, { label: 'Nie', result: 'PB-1' }
    ]},
    Q2012: { text: 'Czy powierzchnia zabudowy wiaty nie przekroczy 50 m² i budujesz ją na działce mieszkaniowej?', options: [
      { label: 'Tak', result: 'W0' }, { label: 'Nie', next: 'Q2011' }
    ]},
    Q2013: { text: 'Czy to parterowy budynek o powierzchni do 35 m² i wysokości konstrukcji do 4,8 m?', options: [
      { label: 'Tak', result: 'W0' }, { label: 'Nie', next: 'Q2011' }
    ]},
    Q2014: { text: 'Czy altana nie przekroczy 35 m² lub jest to altana działkowa / obiekt na terenie ROD?', options: [
      { label: 'Tak', result: 'PB-2' }, { label: 'Nie', result: 'PB-1' }
    ]},
    Q2015: { text: 'Czy obiekt uzupełnia zabudowę zagrodową w ramach istniejącej działki siedliskowej?', options: [
      { label: 'Tak', result: 'W0' }, { label: 'Nie', next: 'Q2013' }
    ]},
    Q2017:      { text: 'Podaj wysokość budynku (w metrach)',           input: 'number', placeholder: 'np. 8', next: 'Q2018_calc'  },
    Q2018_calc: { text: 'Podaj odległość od granicy działki (w metrach)', input: 'number', placeholder: 'np. 4', next: 'Q2018_logic' },
    Q2018_logic: { text: 'Wybierz typ obiektu do rozbiórki', options: [
      { label: 'Dla obiektu nie jest wymagane pozwolenie na budowę',         next: 'Q2018_zabytek' },
      { label: 'Obiekt na terenie zamkniętym ustalonym decyzją MON',         next: 'Q2018_zabytek' },
      { label: 'Obiekt uszkodzony w wyniku działania żywiołu (stan klęski)', next: 'Q2018_zabytek' },
      { label: 'Pozostałe',                                                   result: 'PB-4'        }
    ]},
    Q2018_zabytek: { text: 'Czy budynek jest wpisany do rejestru zabytków lub objęty ochroną konserwatorską?', options: [
      { label: 'Tak', result: 'PB-4' }, { label: 'Nie', result: 'W0' }
    ]},
    Q2019: { text: 'Czy Twój obiekt spełnia jeden z warunków: nie wymaga pozwolenia na budowę LUB leży na terenie zamkniętym MON?', options: [
      { label: 'Tak', next: 'Q2020' }, { label: 'Nie', result: 'PB-3' }
    ]},
    Q2020: { text: 'Czy budynek jest wpisany do rejestru zabytków lub objęty ochroną konserwatorską?', options: [
      { label: 'Tak', result: 'PB-3' }, { label: 'Nie', result: 'W0' }
    ]},
    Q2021: { text: 'Czy inwestycja była realizowana na podstawie pozwolenia na budowę lub zgłoszenia?', options: [
      { label: 'Tak', next: 'Q2022' }, { label: 'Nie', result: 'W0' }
    ]},
    Q2022: { text: 'Zaznacz właściwą opcję', options: [
      { label: 'Roboty są w pełni zakończone',                         next: 'Q2023'    },
      { label: 'Chcę rozpocząć użytkowanie przed zakończeniem budowy', result: 'PB-17a' },
      { label: 'Zmieniłem/-am sposób użytkowania obiektu',             result: 'PB-18'  }
    ]},
    Q2023: { text: 'Jakiego rodzaju budynek?', options: [
      { label: 'Mały (dom jednorodzinny, domek letniskowy, garaż, wiata, altana itp.)', result: 'PB-16' },
      { label: 'Duży (biurowiec, centrum handlowe, budynek deweloperski itp.)',          result: 'PB-17' }
    ]},
    Q2025: { text: 'Czego potrzebujesz?', options: [
      { label: 'Legalizacja',        next: 'Q2027' },
      { label: 'Oświadczenie',       next: 'Q2028' },
      { label: 'Przeniesienie praw', next: 'Q2031' },
      { label: 'Coś innego',         next: 'Q2026' }
    ]},
    Q2026: { text: 'Czego potrzebujesz?', options: [
      { label: 'Uzupełnienie braków lub nieprawidłowości', result: 'WU'    },
      { label: 'Mam problem techniczny',                    result: 'WHELP' },
      { label: 'Chcę porozmawiać z obsługą klienta',        result: 'WINFO' }
    ]},
    Q2027: { text: 'Czy od zakończenia budowy upłynęło 20 lat?', options: [
      { label: 'Tak', result: 'PB-15' }, { label: 'Nie', result: 'PB-19' }
    ]},
    Q2028: { text: 'Kto składa oświadczenie?', options: [
      { label: 'Inwestor lub pełnomocnik inwestora', next: 'Q2029'  },
      { label: 'Kierownik budowy',                   next: 'Q2030'  },
      { label: 'Projektant/-ka',                     result: 'OŚ-5' },
      { label: 'Geodeta/-ka',                        result: 'OŚ-6' }
    ]},
    Q2029: { text: 'Czego dotyczy oświadczenie?', options: [
      { label: 'Prawo do dysponowania nieruchomością na cele budowlane', result: 'PB-5' },
      { label: 'Brak sprzeciwu',                                         result: 'OŚ-1' },
      { label: 'Dokonanie pomiarów',                                     result: 'OŚ-2' }
    ]},
    Q2030: { text: 'Czego dotyczy oświadczenie?', options: [
      { label: 'Doprowadzenie do należytego stanu i porządku terenu budowy', result: 'OŚ-3' },
      { label: 'Zgodność wykonania obiektu z projektem',                     result: 'OŚ-4' }
    ]},
    Q2031: { text: 'Czego dotyczy przeniesienie?', options: [
      { label: 'Decyzji o pozwoleniu na budowę',                       result: 'PB-9'  },
      { label: 'Decyzji o pozwoleniu na wznowienie robót budowlanych', result: 'PB-10' },
      { label: 'Praw i obowiązków wynikających ze zgłoszenia',         result: 'PB-11' }
    ]}
  };

  // ── LOGIKA ───────────────────────────────────────────────────────────────────
  var historyStack = [];

  function mk(tag, cls) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    return n;
  }

  function setBody(content) {
    app.innerHTML = '';
    content.classList.add('animate-in');
    app.appendChild(content);
  }

  function setRestartVisible(visible) {
    restartBtn.style.display = visible ? 'flex' : 'none';
  }

  function showStart() {
    historyStack = [];
    setRestartVisible(false);

    var wrap = mk('div', 'start-screen');
    var h2 = mk('h2'); h2.textContent = 'Nie wiesz, jaki wybrać wniosek?';
    var p  = mk('p');  p.textContent  = 'Odpowiedz na pytania, podpowiemy, który formularz należy złożyć.';
    var btn = mk('button', 'btn-start'); btn.textContent = 'Sprawdź →';
    btn.onclick = function () { render('Q2001'); };

    wrap.appendChild(h2);
    wrap.appendChild(p);
    wrap.appendChild(btn);
    setBody(wrap);
  }

  function render(id) {
    var q = data[id];
    if (!q) return;

    setRestartVisible(true);
    if (historyStack[historyStack.length - 1] !== id) historyStack.push(id);

    var wrap = mk('div');
    var qt = mk('p', 'question-text'); qt.textContent = q.text;
    wrap.appendChild(qt);

    if (q.options) {
      var list = mk('div', 'options-list');
      q.options.forEach(function (opt) {
        var btn = mk('button', 'option-btn');
        var dot = mk('span', 'option-dot');
        var lbl = mk('span'); lbl.textContent = opt.label;
        btn.appendChild(dot);
        btn.appendChild(lbl);
        btn.onclick = function () {
          if (opt.next)   render(opt.next);
          if (opt.result) showResult(opt.result);
        };
        list.appendChild(btn);
      });
      wrap.appendChild(list);
    }

    if (q.input) {
      var il = mk('p', 'input-label'); il.textContent = 'Podaj wartość';
      var field = document.createElement('input');
      field.type = 'text'; field.inputMode = 'numeric';
      field.pattern = '[0-9]*'; field.className = 'input-field';
      field.placeholder = q.placeholder || '';
      var nb = mk('button', 'btn-next'); nb.textContent = 'Dalej →';
      nb.onclick = function () { render(q.next); };
      wrap.appendChild(il);
      wrap.appendChild(field);
      wrap.appendChild(nb);
    }

    if (historyStack.length > 1) {
      var nav  = mk('div', 'nav-footer');
      var back = mk('button', 'btn-back'); back.textContent = '← Wróć';
      back.onclick = function () { historyStack.pop(); render(historyStack.pop()); };
      nav.appendChild(back);
      wrap.appendChild(nav);
    }

    setBody(wrap);
  }

  function showResult(key) {
    var text = RESULTS[key];
    if (!text) return;
    setRestartVisible(true);

    var wrap = mk('div');
    wrap.style.cssText = 'display:flex;flex-direction:column;flex:1';
    var box = mk('div', 'result-box');
    box.innerHTML = text;
    var reset = mk('button', 'btn-reset'); reset.textContent = 'Zacznij od nowa';
    reset.onclick = showStart;
    wrap.appendChild(box);
    wrap.appendChild(reset);
    setBody(wrap);
  }

  restartBtn.onclick = showStart;
  showStart();

})();
