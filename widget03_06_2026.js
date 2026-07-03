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
    '#asw .input-field{width:100%;padding:13px 16px;border:1.5px solid #e2e8f0;border-radius:12px;font-size:15px;font-family:inherit;color:#0f172a;margin-bottom:12px;background:#f8fafc;transition:border-color .15s,box-shadow .15s}',
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

  // ── WYNIKI (teksty z index_prompt_pomocnik_3_fixed_v2) ───────────────────────
  var RESULTS = {
    'PB-RES-3': 'Przed przystąpieniem do realizacji inwestycji lub przed zakupem działki musisz znać reguły dotyczące planowania przestrzennego na danym terenie. W <a href="https://www.geoportal.gov.pl/pl/aplikacje/geoportal-krajowy/" target="_blank" rel="noopener">Geoportalu Krajowym</a> możesz sprawdzić, czy został zatwierdzony plan ogólny i czy jest ustanowiony plan miejscowy. Po wejściu na stronę Geoportalu wybierz zakładkę Planowanie przestrzenne. W przypadku zatwierdzonego planu możesz przejść do podjętej uchwały opublikowanej na stronie gminy. Niezależnie od informacji na stronie internetowej, rozsądnym wyjściem jest telefon lub po prostu wizyta w urzędzie gminy. Możesz też zlecić całość rozeznania w tym zakresie osobie, która będzie przygotowywać dla Ciebie projekt budowlany. Jeśli szukasz takiej osoby, możesz skorzystać z <a href="https://e-crub.gunb.gov.pl/" target="_blank" rel="noopener">Wyszukiwarki e-CRUB</a>.',
    'PB-RES-4': 'Świetnie, że szukasz projektu. W Głównym Urzędzie Nadzoru Budowlanego udostępniamy przykładowe projekty domów zupełnie za darmo. Projekty dostępne są na tej stronie. Na etapie sporządzania projektu budowlanego będzie potrzebne tylko przygotowanie projektu zagospodarowanie działki lub terenu przez projektanta/projektantkę. Jeśli szukasz takiej osoby, możesz skorzystać z <a href="https://e-crub.gunb.gov.pl/" target="_blank" rel="noopener">Wyszukiwarki e-CRUB</a>.',
    'PB-RES-5': 'Jeśli szukasz projektanta lub projektantki, możesz skorzystać naszej <a href="https://e-crub.gunb.gov.pl/" target="_blank" rel="noopener">Wyszukiwarki e-CRUB</a>.',
    'PB-1': 'Twoja inwestycja wymaga pozwolenia na budowę. Wypełnij, podpisz i wyślij <a href="https://wnioski.gunb.gov.pl/#gunb_epb_1_pozwolenie_budowa" target="_blank" rel="noopener">Wniosek o pozwolenie na budowę (PB-1)</a>. Możesz także skorzystać z opcji wcześniejszego zatwierdzenia projektu zagospodarowania działki lub terenu lub projektu architektoniczno-budowlanego przed uzyskaniem pozwolenia. Jak chcesz, to wyślij <a href="https://wnioski.gunb.gov.pl/#formularz_epb6" target="_blank" rel="noopener">Wniosek o wydanie odrębnej decyzji o zatwierdzeniu projektu zagospodarowania działki lub terenu lub projektu architektoniczno-budowlanego (PB-6)</a>. Pamiętaj, że ostateczna decyzja w tym zakresie zależy od lokalnego organu administracji architektoniczno-budowlanej, z którym trzeba to skonsultować.',
    'PB-2': 'Twoje inwestycja wymaga zgłoszenia do właściwego organu. Wypełnij, podpisz i wyślij <a href="https://wnioski.gunb.gov.pl/#gunb_epb_2_zgloszenie_robot" target="_blank" rel="noopener">Zgłoszenie robót budowlanych (PB-2)</a>. Pamiętaj, że ostateczna decyzja w tym zakresie zależy od lokalnego organu administracji architektoniczno-budowlanej, z którym trzeba to skonsultować.',
    'PB-2A': 'Wypełnij, podpis i wyślij <a href="https://wnioski.gunb.gov.pl/#epb_2a_przebudowa_70m2" target="_blank" rel="noopener">Zgłoszenie budowy domu jednorodzinnego do 70 m2 (PB-2a)</a> Pamiętaj, że ostateczna decyzja w tym zakresie zależy od lokalnego organu administracji architektoniczno-budowlanej, z którym trzeba to skonsultować.',
    'PB-2B': 'Wypełnij, podpisz i wyślij <a href="https://wnioski.gunb.gov.pl/#epb_2a_przebudowa_70m2" target="_blank" rel="noopener">Zgłoszenie budowy lub przebudowy domu jednorodzinnego (PB-2a)</a>. Pamiętaj, że ostateczna decyzja w tym zakresie zależy od lokalnego organu administracji architektoniczno-budowlanej, z którym trzeba to skonsultować',
    'W0': 'Możesz działać bez formalności. Pamiętaj, że ostateczna decyzja zależy od lokalnego organu administracji architektoniczno-budowlanej, z którym trzeba to skonsultować.',
    'WWZ': 'Wypełnij, podpisz i wyślij <a href="https://wnioski.gunb.gov.pl/#wniosek_wz" target="_blank" rel="noopener">Wniosek o ustalenie lokalizacji inwestycji celu publicznego albo warunków zabudowy (WZ)</a>',
    'PB-3': 'Dla Twojego obiektu wymagane jest pozwolenie na rozbiórkę. Wypełnij, podpisz i wyślij <a href="https://wnioski.gunb.gov.pl/#gunb_epb_3_wniosek_rozbiorka" target="_blank" rel="noopener">Wniosek o pozwolenie na rozbiórkę (PB 3)</a>. Pamiętaj, że ostateczna decyzja w tym zakresie zależy od lokalnego organu administracji architektoniczno-budowlanej, z którym trzeba to skonsultować.',
    'PB-4': 'Twoja rozbiórka wymaga urzędowego zgłoszenia. Wypełnij, podpisz i wyślij <a href="https://wnioski.gunb.gov.pl/#gunb_epb_4_zgloszenie_rozbiorka_b" target="_blank" rel="noopener">Zgłoszenie rozbiórki (PB-4)</a>. Jeśli Twój obiekt został uszkodzony w wyniku działania żywiołu prześlij <a href="https://wnioski.gunb.gov.pl/#zgloszenie_odbudowy" target="_blank" rel="noopener">Zgłoszenie odbudowy, remontu lub rozbiórki obiektu budowlanego (K-1)</a>. Pamiętaj, że ostateczna decyzja w tym zakresie zależy od lokalnego organu administracji architektoniczno-budowlanej, z którym trzeba to skonsultować.',
    'PB-RES-1': 'Aby ustalić, czy dla domu jednorodzinnego jest wymagane pozwolenie na budowę, musisz znać sposób oddziaływania na sąsiednie działki. Jeśli tego nie wiesz, skonsultuj się z projektantem, aby zasięgnąć porady w tym zakresie.',
    'PB-RES-2': 'Na Twój obiekt nie jest wymagane pozwolenie na budowę. Z tego wynika, że możesz dokonać rozbiórki tego obiektu bez żadnych formalności. Pamiętaj, że ostateczna decyzja w tym zakresie zależy o lokalnego organu administracji architektoniczno-budowlanej z którym trzeba to skonsultować.',
    'PB-16': 'Wypełnij, podpisz i wyślij <a href="https://wnioski.gunb.gov.pl/#epb_zb_zakonczenie_budowy" target="_blank" rel="noopener">Zawiadomienie o zakończeniu budowy (PB-16)</a>. Jeśli Twój obiekt budowlany uległ zniszczeniu w wyniku klęski żywiołowej, wyślij <a href="https://wnioski.gunb.gov.pl/#zakonczenie_odbudowy" target="_blank" rel="noopener">Zawiadomienie o zakończeniu odbudowy obiektu budowlanego (K-2)</a>. Jeśli potrzebujesz pisemną decyzję organu wyślij <a href="https://wnioski.gunb.gov.pl/#epb_pnu_pozwolenie_na_uzytkowanie" target="_blank" rel="noopener">Wniosek o pozwolenie na użytkowanie (PB-17)</a>',
    'PB-16a': 'Wypełnij, podpisz i wyślij <a href="https://wnioski.gunb.gov.pl/#epb15_zb_zakonczenie_budowy" target="_blank" rel="noopener">Zawiadomienie o zakończeniu budowy domu jednorodzinnego (PB-16a)</a>. Jeśli Twój obiekt budowlany uległ zniszczeniu w wyniku klęski żywiołowej, wyślij <a href="https://wnioski.gunb.gov.pl/#zakonczenie_odbudowy" target="_blank" rel="noopener">Zawiadomienie o zakończeniu odbudowy obiektu budowlanego (K-2)</a>. Jeśli potrzebujesz pisemną decyzję organu wyślij <a href="https://wnioski.gunb.gov.pl/#epb_pnu_pozwolenie_na_uzytkowanie" target="_blank" rel="noopener">Wniosek o pozwolenie na użytkowanie (PB-17)</a>',
    'PB-17': 'Wypełnij, podpisz i wyślij <a href="https://wnioski.gunb.gov.pl/#epb_pnu_pozwolenie_na_uzytkowanie" target="_blank" rel="noopener">Wniosek o pozwolenie na użytkowanie (PB-17)</a>',
    'PB-17a': 'Wypełnij, podpisz i wyślij <a href="https://wnioski.gunb.gov.pl/#epb17_pnu_pozwolenie_na_uzytkowanie" target="_blank" rel="noopener">Wniosek o pozwolenie na użytkowanie przed zakończeniem budowy (PB-17a)</a>',
    'PB-18': 'Wypełnij, podpisz i wyślij <a href="https://wnioski.gunb.gov.pl/#epb_zsu_zmiana_spos_uzytk" target="_blank" rel="noopener">Zgłoszenie zmiany sposobu użytkowania obiektu (PB-18)</a>',
    'PB-15': 'Wypełnij, podpisz i wyślij <a href="https://wnioski.gunb.gov.pl/#ePB1x_u" target="_blank" rel="noopener">Wniosek o uproszczoną legalizację (PB-15)</a>',
    'PB-19': 'Wypełnij, podpisz i wyślij <a href="https://wnioski.gunb.gov.pl/#ePB1x_u" target="_blank" rel="noopener">Wniosek o legalizację (PB-19)</a>',
    'PB-9': 'Wypełnij, podpisz i wyślij <a href="https://wnioski.gunb.gov.pl/#gunb_epb_6_przeniesienie_pozwolenie_budowa" target="_blank" rel="noopener">Wniosek o przeniesienie decyzji o pozwoleniu na budowę (PB-9)</a>',
    'PB-10': 'Wypełnij, podpisz i wyślij <a href="https://wnioski.gunb.gov.pl/#epb_pdw_przen_dec_wzn" target="_blank" rel="noopener">Wniosek o przeniesienie decyzji o pozwoleniu na wznowienie robót budowlanych (PB-10)</a>',
    'PB-11': 'Wypełnij, podpisz i wyślij <a href="https://wnioski.gunb.gov.pl/#gunb_epb_8_przeniesienie_praw_zgloszenie" target="_blank" rel="noopener">Wniosek o przeniesienie praw i obowiązków wynikających ze zgłoszenia (PB-11)</a>',
    'PB-12': 'Wypełnij, podpisz i wyślij <a href="https://wnioski.gunb.gov.pl/#gunb_epb_9_zawiadomienie" target="_blank" rel="noopener">Zawiadomienie o zamierzonym terminie rozpoczęcia robót budowlanych (PB-12)</a>',
    'PB-14': 'Wypełnij, podpisz i wyślij <a href="https://wnioski.gunb.gov.pl/#gunb_epb_10_wejscie_teren" target="_blank" rel="noopener">Wniosek o wejście na sąsiadujący teren (PB-14)</a>',
    'PB-7': 'Wypełnij, podpisz i wyślij <a href="https://wnioski.gunb.gov.pl/#epb_wyd_dec_zmiana_pozw" target="_blank" rel="noopener">Wniosek o zmianę pozwolenia na budowę (PB-7)</a>',
    'PB-13': 'Wypełnij, podpisz i wyślij <a href="https://wnioski.gunb.gov.pl/#epb_wsp_wylaczenie_stosowania_przepisow" target="_blank" rel="noopener">Wniosek o wyłączenie niektórych obowiązków kierownika budowy (PB-13)</a>',
    'PB-5': 'Wypełnij, podpisz i wyślij <a href="https://wnioski.gunb.gov.pl/#gunb_epb_5_oswiadczenie" target="_blank" rel="noopener">Oświadczenie PB-5</a>',
    'OŚ-1': 'Wypełnij, podpisz i wyślij <a href="https://wnioski.gunb.gov.pl/#osw_o_braku_sprzeciwu" target="_blank" rel="noopener">Oświadczenie o braku sprzeciwu</a>',
    'OŚ-2': 'Wypełnij, podpisz i wyślij <a href="https://wnioski.gunb.gov.pl/#osw_o_dokonaniu_pomiarow" target="_blank" rel="noopener">Oświadczenie o dokonaniu pomiarów</a>',
    'OŚ-3': 'Wypełnij, podpisz i wyślij <a href="https://wnioski.gunb.gov.pl/#osw_o_doprowadzeniu" target="_blank" rel="noopener">Oświadczenie o doprowadzeniu do należytego stanu</a>',
    'OŚ-4': 'Wypełnij, podpisz i wyślij <a href="https://wnioski.gunb.gov.pl/#osw_o_zgodnosci" target="_blank" rel="noopener">Oświadczenie o zgodności</a>',
    'OŚ-5': 'Wypełnij, podpisz i wyślij <a href="https://wnioski.gunb.gov.pl/#osw_o_sporzadzeniu_projektu_technicznego" target="_blank" rel="noopener">Oświadczenie o sporządzeniu projektu technicznego zgodnie z obowiązującymi przepisami</a>',
    'OŚ-6': 'Wypełnij, podpisz i wyślij <a href="https://wnioski.gunb.gov.pl/#info_geodety_o_zgodnosci" target="_blank" rel="noopener">Informację osoby posiadającej odpowiednie uprawnienia zawodowe w dziedzinie geodezji kartografii o zgodności</a>',
    'WU': 'Wypełnij, podpisz i wyślij <a href="https://wnioski.gunb.gov.pl/#epb_for_uzu" target="_blank" rel="noopener">wzór Uzupełnienia formularzy</a>',
    'WHELP': 'Wyślij wiadomość na adres <a href="mailto:e-budownictwo@gunb.gov.pl">e-budownictwo@gunb.gov.pl</a>. Odpowiadamy bardzo szybko!',
    'WINFO': 'Zadzwoń na Infolinię dla Obywatela: <strong>+48 22 295 51 28</strong><br>W dni robocze w godzinach: 10:00-13:00'
  };

  // ── DRZEWO PYTAŃ (logika z index_prompt_pomocnik_3_fixed_v2) ─────────────────
  // Poprawka względem źródła: opcja "Nie wiem" w Q9 miała brakujący wynik
  // (martwy przycisk) — uzupełniona analogicznie do bliźniaczego pytania Q24.
  var data = {
    Q1: { text: 'Co chcesz zrobić?', options: [
      { label: 'Budowa',      next: 'Q2'  },
      { label: 'Rozbiórka',   next: 'Q21' },
      { label: 'Zakończenie', next: 'Q39' },
      { label: 'Coś innego?', next: 'Q42' }
    ]},
    Q2: { text: 'Na jakim jesteś etapie?', options: [
      { label: 'Planowanie inwestycji',                                          next: 'Q3'   },
      { label: 'Gotowy projekt budowlany lub prosta inwestycja bez projektu',     next: 'Q5'   },
      { label: 'Rozpoczęcie budowy',                                             result: 'PB-12' },
      { label: 'Budowa w realizacji',                                            next: 'Q4'   }
    ]},
    Q3: { text: 'Czy na działce został ustanowiony plan?', options: [
      { label: 'Brak planu miejscowego /ogólnego',            result: 'WWZ'      },
      { label: 'Jest plan miejscowy / ogólny',                next: 'Q2005'      },
      { label: 'Nie wiem, czy jest plan miejscowy/ogólny',    result: 'PB-RES-3' },
      { label: 'Chcę przejść dalej',                          next: 'Q2005'      }
    ]},
    Q2005: { alias: 'Q5' },
    Q4: { text: 'Co potrzebujesz?', options: [
      { label: 'Wejście na sąsiadujący teren',                       result: 'PB-14' },
      { label: 'Zmiana pozwolenia na budowę',                        result: 'PB-7'  },
      { label: 'Wyłączenie niektórych obowiązków kierownika budowy', result: 'PB-13' }
    ]},
    Q5: { text: 'Co budujesz?', options: [
      { label: 'Dom jednorodzinny',              next: 'Q9'    },
      { label: 'Dom do 70 m2',                    next: 'Q10'   },
      { label: 'Budynek użyteczności publicznej', next: 'Q11'   },
      { label: 'Coś innego?',                     next: 'Q2006' }
    ]},
    Q2006: { alias: 'Q6' },
    Q6: { text: 'Co budujesz?', options: [
      { label: 'Sieć',       next: 'Q12' },
      { label: 'Schron',     next: 'Q15' },
      { label: 'Garaż',      next: 'Q16' },
      { label: 'Coś innego?', next: 'Q7' }
    ]},
    Q7: { text: 'Co budujesz?', options: [
      { label: 'Wiata na mieszkaniówce', next: 'Q17' },
      { label: 'Obiekt gospodarczy',     next: 'Q18' },
      { label: 'Altana',                 next: 'Q19' },
      { label: 'Coś innego?',            next: 'Q8'  }
    ]},
    Q8: { text: 'Co budujesz?', options: [
      { label: 'Budynek rolny', next: 'Q20' },
      { label: 'Inny obiekt na zgłoszenie o którym mowa w art. 29 pkt 1 ustawy – Prawo budowlane', result: 'PB-2' }
    ]},
    Q9: { text: 'Czy Twój budynek ma obszar oddziaływania w całości mieszczący się na działce, na której został zaprojektowany?', options: [
      { label: 'Tak',      result: 'PB-2B'    },
      { label: 'Nie',      result: 'PB-1'     },
      { label: 'Nie wiem', result: 'PB-RES-1' }
    ]},
    Q10: { text: 'Czy planujesz budowę domu na własne potrzeby mieszkaniowe?', options: [
      { label: 'Tak', result: 'PB-2A' }, { label: 'Nie', result: 'PB-1' }
    ]},
    Q11: { text: 'Czy to będzie wolno stojący, nie więcej niż dwukondygnacyjny budynek użyteczności publicznej o powierzchni użytkowej nie większej niż 200 m2?', options: [
      { label: 'Tak', next: 'Q9' }, { label: 'Nie', result: 'PB-1' }
    ]},
    Q12: { text: 'Wybierz rodzaj sieci', options: [
      { label: 'Elektroenergetyczna',                    next: 'Q13'  },
      { label: 'Wodociągowa, kanalizacyjna, cieplna',    result: 'PB-2' },
      { label: 'Gazowa',                                 next: 'Q14'  },
      { label: 'Wodorowa',                               next: 'Q14'  }
    ]},
    Q13: { text: 'Czy napięcie znamionowe jest wyższe niż 15kV?', options: [
      { label: 'Tak', result: 'PB-1' }, { label: 'Nie', result: 'PB-2' }
    ]},
    Q14: { text: 'Czy ciśnienie robocze sieci będzie wyższe niż 0,5 MPa?', options: [
      { label: 'Tak', result: 'PB-1' }, { label: 'Nie', result: 'PB-2' }
    ]},
    Q15: { text: 'Czy powierzchnia użytkowa przekracza 35 m2?', options: [
      { label: 'Tak', result: 'PB-1' }, { label: 'Nie', result: 'PB-2' }
    ]},
    Q16: { text: 'Czy powierzchnia zabudowy przekroczy 35 m2?', options: [
      { label: 'Tak', result: 'PB-1' }, { label: 'Nie', result: 'PB-2' }
    ]},
    Q17: { text: 'Czy powierzchnia zabudowy przekroczy 50 m2??', options: [
      { label: 'Tak', result: 'PB-1' }, { label: 'Nie', result: 'W0' }
    ]},
    Q18: { text: 'Czy planujesz budynek parterowy?', options: [
      { label: 'Tak', next: 'Q18b' }, { label: 'Nie', result: 'PB-1' }
    ]},
    Q18b: { text: 'Czy rozpiętość konstrukcji ma być większa niż 4,8 m?', options: [
      { label: 'Tak', result: 'PB-1' }, { label: 'Nie', next: 'Q16' }
    ]},
    Q19: { text: 'Czy altana przekroczy powierzchnię 35 m2?', options: [
      { label: 'Tak', result: 'PB-1' }, { label: 'Nie', next: 'Q19b' }
    ]},
    Q19b: { text: 'Czy ma być to altana działkowa lub obiekt na terenie ROD?', options: [
      { label: 'Tak', result: 'W0' }, { label: 'Nie', result: 'PB-2' }
    ]},
    Q20: { text: 'Czy obiekt uzupełnia zabudową zagrodową w ramach istniejącej działki siedliskowej?', options: [
      { label: 'Tak', result: 'W0' }, { label: 'Nie', next: 'Q18' }
    ]},
    Q21: { text: 'Wybierz typ obiektu:', options: [
      { label: 'Dom jednorodzinny',              next: 'Q24' },
      { label: 'Dom do 70 m2',                    next: 'Q25' },
      { label: 'Budynek użyteczności publicznej', next: 'Q26' },
      { label: 'Coś innego?',                     next: 'Q22' }
    ]},
    Q22: { text: 'Wybierz typ obiektu', options: [
      { label: 'Sieć',       next: 'Q27' },
      { label: 'Schron',     next: 'Q30' },
      { label: 'Garaż',      next: 'Q31' },
      { label: 'Coś innego?', next: 'Q23' }
    ]},
    Q23: { text: 'Wybierz typ obiektu', options: [
      { label: 'Wiata na mieszkaniówce', next: 'Q32' },
      { label: 'Gospodarczy',            next: 'Q33' },
      { label: 'Altana',                 next: 'Q34' },
      { label: 'Budynek rolny',          next: 'Q35' }
    ]},
    Q24: { text: 'Czy Twój budynek ma obszar oddziaływania w całości mieszczący się na działce, na której został zaprojektowany?', options: [
      { label: 'Tak',      result: 'PB-RES-2' },
      { label: 'Nie',      next: 'Q36'         },
      { label: 'Nie wiem', result: 'PB-RES-1'  }
    ]},
    Q25: { text: 'Czy to jest dom postawiony na własne potrzeby mieszkaniowe?', options: [
      { label: 'Tak', result: 'PB-RES-2' }, { label: 'Nie', next: 'Q36' }
    ]},
    Q26: { text: 'Czy to jest wolno stojący, nie więcej niż dwukondygnacyjny budynek o powierzchni użytkowej nie większej niż 200 m2?', options: [
      { label: 'Tak', next: 'Q24' }, { label: 'Nie', next: 'Q36' }
    ]},
    Q27: { text: 'Wybierz rodzaj sieci', options: [
      { label: 'Elektroenergetyczna',                 next: 'Q28'  },
      { label: 'Wodociągowa, kanalizacyjna, cieplna', result: 'PB-RES-2' },
      { label: 'Gazowa',                              next: 'Q29'  },
      { label: 'Wodorowa',                            next: 'Q29'  }
    ]},
    Q28: { text: 'Czy napięcie znamionowe będzie wyższe niż 15kV?', options: [
      { label: 'Tak', next: 'Q36' }, { label: 'Nie', result: 'PB-RES-2' }
    ]},
    Q29: { text: 'Czy ciśnienie robocze sieci będzie wyższe niż 0,5 MPa?', options: [
      { label: 'Tak', next: 'Q36' }, { label: 'Nie', result: 'PB-RES-2' }
    ]},
    Q30: { text: 'Czy powierzchnia użytkowa przekracza 35 m2?', options: [
      { label: 'Tak', next: 'Q36' }, { label: 'Nie', result: 'PB-RES-2' }
    ]},
    Q31: { text: 'Czy powierzchnia zabudowy przekracza 35 m2?', options: [
      { label: 'Tak', next: 'Q36' }, { label: 'Nie', result: 'PB-RES-2' }
    ]},
    Q32: { text: 'Czy powierzchnia zabudowy przekracza 50 m2?', options: [
      { label: 'Tak', next: 'Q36' }, { label: 'Nie', result: 'PB-RES-2' }
    ]},
    Q33: { text: 'Czy to budynek parterowy?', options: [
      { label: 'Tak', next: 'Q33b' }, { label: 'Nie', next: 'Q36' }
    ]},
    Q33b: { text: 'Czy powierzchnia przekracza 35 m2?', options: [
      { label: 'Tak', next: 'Q36' }, { label: 'Nie', next: 'Q33c' }
    ]},
    Q33c: { text: 'Czy rozpiętość konstrukcyjna jest większa niż 4,8 m?', options: [
      { label: 'Tak', next: 'Q36' }, { label: 'Nie', result: 'PB-RES-2' }
    ]},
    Q34: { text: 'Czy powierzchnia altany przekracza 35 m2?', options: [
      { label: 'Tak', next: 'Q36' }, { label: 'Nie', next: 'Q34b' }
    ]},
    Q34b: { text: 'Czy jest to altana działkowa lub obiekt na terenie ROD?', options: [
      { label: 'Tak', result: 'PB-RES-2' }, { label: 'Nie', next: 'Q36' }
    ]},
    Q35: { text: 'Czy obiekt uzupełnia zabudowę zagrodową w ramach istniejącej działki siedliskowej?', options: [
      { label: 'Tak', result: 'PB-RES-2' }, { label: 'Nie', next: 'Q33' }
    ]},
    Q36: { text: 'Czy inwestycja jest objęta jakąś formą ochrony konserwatorskiej?', options: [
      { label: 'Tak', result: 'PB-3' }, { label: 'Nie', next: 'Q37' }
    ]},
    Q37: { text: 'Podaj teraz wysokość budynku (w metrach)',            input: 'number', variable: 'PW', placeholder: 'np. 8' },
    Q38: { text: 'Podaj odległość od granicy działki (w metrach)',      input: 'number', variable: 'PO', placeholder: 'np. 4' },
    Q39: { text: 'Czy dla tej inwestycji było wymagane pozwolenie na budowę?', options: [
      { label: 'Tak', next: 'Q40' }, { label: 'Nie', next: 'Q41b' }
    ]},
    Q40: { text: 'Zaznacz właściwą opcję', options: [
      { label: 'Roboty zakończone, samowola lub budowa prowadzona z istotnym odstąpieniem od projektu', result: 'PB-17' },
      { label: 'Roboty zakończone',                          next: 'Q41'   },
      { label: 'Użytkowanie przed zakończeniem',              result: 'PB-17a' },
      { label: 'Zmiana sposobu użytkowania',                  result: 'PB-18'  }
    ]},
    Q41: { text: 'Czego dotyczyła budowa?', options: [
      { label: 'Biurowiec, centrum handlowe obiekt przemysłowy etc. (pełen katalog wymieniony w art. 55 ust. 1 ustawy Pb)', result: 'PB-17'  },
      { label: 'Dom jednorodzinny',                                                                                       result: 'PB-16a' },
      { label: 'Przydomowe budowle ochronne o powierzchni użytkowej do 35 m2',                                            result: 'PB-16'  }
    ]},
    Q41b: { text: 'Czy dla tej inwestycji było wymagane zgłoszenie?', options: [
      { label: 'Tak', next: 'Q41c' }, { label: 'Nie', result: 'W0' }
    ]},
    Q41c: { text: 'Wybierz typ obiektu:', options: [
      { label: 'Wolnostojący budynek mieszkalny jednorodzinny',              result: 'PB-16a' },
      { label: 'Dom do 70 m.',                                              result: 'PB-16a' },
      { label: 'Wiata, garaż, altana, domek letniskowy, budynek gospodarczy itp.', result: 'W0'     },
      { label: 'Inne obiekty wymienione w art. 54 PB',                       result: 'PB-16'  }
    ]},
    Q42: { text: 'Co potrzeba?', options: [
      { label: 'Legalizacja',        next: 'Q44'  },
      { label: 'Oświadczenie',       next: 'Q45'  },
      { label: 'Przeniesienie praw', next: 'Q47P' },
      { label: 'Coś innego?',        next: 'Q43'  }
    ]},
    Q43: { text: 'Co potrzeba?', options: [
      { label: 'Uzupełnienie braków lub nieprawidłowości',            result: 'WU'    },
      { label: 'Problem techniczny dotyczący systemu e-Budownictwo',  result: 'WHELP' },
      { label: 'Połączenie z infolinią GUNB',                        result: 'WINFO' }
    ]},
    Q44: { text: 'Czy od zakończenia budowy upłynęło 20 lat?', options: [
      { label: 'Tak', result: 'PB-15' }, { label: 'Nie', result: 'PB-19' }
    ]},
    Q45: { text: 'Kto składa oświadczenie?', options: [
      { label: 'Inwestor lub pełnomocnik inwestora', next: 'Q46'  },
      { label: 'Kierownik budowy',                   next: 'Q47'  },
      { label: 'Projektant',                         result: 'OŚ-5' },
      { label: 'Geodeta',                            result: 'OŚ-6' }
    ]},
    Q46: { text: 'Zaznacz, co potrzebujesz', options: [
      { label: 'Oświadczenie o posiadanym prawie do dysponowania nieruchomością na cele budowlane', result: 'PB-5' },
      { label: 'Oświadczenie o braku sprzeciwu',                                                     result: 'OŚ-1' },
      { label: 'Oświadczenie o dokonaniu pomiarów',                                                   result: 'OŚ-2' }
    ]},
    Q47: { text: 'Zaznacz, co potrzebujesz', options: [
      { label: 'Oświadczenie o doprowadzeniu do należytego stanu i porządku terenu budowy', result: 'OŚ-3' },
      { label: 'Oświadczenie o zgodności wykonania obiektu budowlanego z projektem',         result: 'OŚ-4' }
    ]},
    Q47P: { text: 'Zaznacz, czego dotyczy przeniesienie', options: [
      { label: 'Decyzji o pozwoleniu na budowę',                       result: 'PB-9'  },
      { label: 'Decyzji o pozwoleniu na wznowienie robót budowlanych', result: 'PB-10' },
      { label: 'Praw i obowiązków wynikających ze zgłoszenia',         result: 'PB-11' }
    ]}
  };

  // ── LOGIKA ───────────────────────────────────────────────────────────────────
  var historyStack = [];
  var currentId    = null;
  var PW = null;
  var PO = null;

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

  function resolveQuestion(id) {
    var q = data[id];
    while (q && q.alias) { q = data[q.alias]; }
    return q;
  }

  function showStart() {
    historyStack = [];
    currentId = null;
    PW = null;
    PO = null;
    setRestartVisible(false);

    var wrap = mk('div', 'start-screen');
    var h2 = mk('h2'); h2.textContent = 'Nie wiesz, jaki wybrać wniosek?';
    var p  = mk('p');  p.textContent  = 'Odpowiedz na pytania, podpowiemy, który formularz należy złożyć.';
    var btn = mk('button', 'btn-start'); btn.textContent = 'Sprawdź →';
    btn.onclick = function () { render('Q1'); };

    wrap.appendChild(h2);
    wrap.appendChild(p);
    wrap.appendChild(btn);
    setBody(wrap);
  }

  function render(id) {
    var q = resolveQuestion(id);
    if (!q) return;

    currentId = id;
    setRestartVisible(true);

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
        btn.onclick = function () { chooseOption(opt); };
        list.appendChild(btn);
      });
      wrap.appendChild(list);
    }

    if (q.input === 'number') {
      var il = mk('p', 'input-label'); il.textContent = 'Podaj wartość';
      var field = document.createElement('input');
      field.type = 'number'; field.step = '0.01';
      field.className = 'input-field';
      field.placeholder = q.placeholder || '';
      var nb = mk('button', 'btn-next'); nb.textContent = 'Dalej →';
      nb.onclick = function () { submitNumber(q, field); };
      wrap.appendChild(il);
      wrap.appendChild(field);
      wrap.appendChild(nb);
    }

    if (historyStack.length > 0) {
      var nav  = mk('div', 'nav-footer');
      var back = mk('button', 'btn-back'); back.textContent = '← Wróć';
      back.onclick = goBack;
      nav.appendChild(back);
      wrap.appendChild(nav);
    }

    setBody(wrap);
  }

  function chooseOption(opt) {
    if (!opt.next && !opt.result) return;
    historyStack.push(currentId);
    if (opt.result) { showResult(opt.result); return; }
    render(opt.next);
  }

  function submitNumber(question, field) {
    var value = parseFloat(field.value);
    if (isNaN(value)) { field.focus(); return; }

    historyStack.push(currentId);

    if (question.variable === 'PW') {
      PW = value;
      if (PW >= 8) { showResult('PB-3'); } else { render('Q38'); }
      return;
    }

    if (question.variable === 'PO') {
      PO = value;
      if (PO >= (PW / 2)) { showResult('PB-4'); } else { showResult('PB-3'); }
    }
  }

  function goBack() {
    if (!historyStack.length) return;
    var prev = historyStack.pop();
    render(prev);
  }

  function showResult(key) {
    var text = RESULTS[key];
    if (!text) return;
    setRestartVisible(true);

    var wrap = mk('div');
    wrap.style.cssText = 'display:flex;flex-direction:column;flex:1';
    var box = mk('div', 'result-box');
    box.innerHTML = text;
    wrap.appendChild(box);

    var reset = mk('button', 'btn-reset'); reset.textContent = 'Zacznij od nowa';
    reset.onclick = showStart;
    wrap.appendChild(reset);

    if (historyStack.length > 0) {
      var nav  = mk('div', 'nav-footer');
      var back = mk('button', 'btn-back'); back.textContent = '← Wróć';
      back.onclick = goBack;
      nav.appendChild(back);
      wrap.appendChild(nav);
    }

    setBody(wrap);
  }

  restartBtn.onclick = showStart;
  showStart();

})();
