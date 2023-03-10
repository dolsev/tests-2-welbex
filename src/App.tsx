import styles from './App.module.scss';
import Classnames from 'classnames';

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.header}>
        <div className={styles['header-left']}>
          <div className={styles.logo}>
            <img
              alt=''
              src='https://welbex.tech/wp-content/themes/welbex_template/img/logo.svg'
            />
            <div className={styles['logo-text']}>
                            <span>
                                крупный интегратор CRM <br /> в Росcии и ещё 8 странах
                            </span>
            </div>
          </div>
          <div className={styles.important}>
            <span className={styles['important-item']}>Услуги</span>
            <span className={styles['important-item']}>Виджеты</span>
            <span className={styles['important-item']}>Интеграции</span>
            <span className={styles['important-item']}>Кейсы</span>
            <span className={styles['important-item']}>Сертификаты</span>
          </div>
        </div>
        <div className={styles['header-right']}>
          <span className={styles['important-phone']}>+7 555 555-55-55</span>
          <div className={styles['header-icons']}>
            <img
              alt=''
              src='/img/telegram-icon.png'
              className={styles['header-icon']}
            />
            <img alt='' src='/img/phone-icon.png' className={styles['header-icon']} />
            <img
              alt=''
              src='/img/whatsapp-icon.png'
              className={styles['header-icon']}
            />
          </div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.hero}>
          <div className={styles['red-l-m']}></div>
          <div className={styles['red-b-m']}></div>
          <div className={styles['purple-l-m']}></div>
          <div className={styles['purple-b-m']}></div>
          <div className={styles['hero-left']}>
            <div className={styles.earn}>
                            <span className={styles['earn-more']}>
                                Зарабатывайте <br /> больше
                            </span>
              <span
                className={Classnames(
                  styles['welbex-colorfull'],
                  styles['with-welbex']
                )}
              >с WELBEX</span>
            </div>
            <span className={styles['developing-sales']}>Развиваем и контролируем <br /> продажи за вас </span>
          </div>
          <div className={styles['hero-right']}>
                        <span className={styles['welbex-colorfull-free']}>
                            <span className={styles['welbex-none-colorfull']}>Вместе с</span>{' '}
                          БЕСПЛАТНОЙ <br /> КОНСУЛЬТАЦИЕЙ{' '}
                          <span className={styles['welbex-none-colorfull']}>мы дарим:</span>
                        </span>
            <div className={styles['columns-mobile']}>
              <div className={styles['column-mobile']}>
                <div className={styles['custom-dash']}></div>
                SKYPE АУДИТ
              </div>
              <div className={styles['column-mobile']}>
                <div className={styles['custom-dash']}></div>
                DASHBOARD
              </div>
              <div className={styles['column-mobile']}>
                <div className={styles['custom-dash']}></div>
                30 ВИДЖЕТОВ
              </div>
              <div className={styles['column-mobile']}>
                <div className={styles['custom-dash']}></div>
                МЕСЯЦ AMOCRM
              </div>
            </div>
            <div className={styles.columns}>
              <div className={styles.column}>
                <span className={styles['column-h1']}>ВИДЖЕТЫ</span>
                <span className={styles['column-h2']}>
                                    30 готовых <br /> решений
                                </span>
              </div>
              <div className={styles.column}>
                <span className={styles['column-h1']}>SKYPE АУДИТ</span>
                <span className={styles['column-h2']}>
                                    отдела продаж <br /> и CRM системы
                                </span>
              </div>
              <div className={styles.column}>
                <span className={styles['column-h1']}>DASHBOARD</span>
                <span className={styles['column-h2']}>
                                    с показателями <br /> вашего бизнеса
                                </span>
              </div>
              <div className={styles.column}>
                <span className={styles['column-h1']}>35 дней</span>
                <span className={styles['column-h2']}>
                                    использования <br /> CRM
                                </span>
              </div>
            </div>
            <button className={styles.button}>Получить консультацию</button>
          </div>
        </div>
        <div className={styles['footer-wrapper']}>
          <div className={styles.footer}>
            <div className={styles['footer-column']}>
              <span className={styles['footer-h1']}>О КОМПАНИИ</span>
              <div className={styles['footer-h2-wrapper']}>
                <span className={styles['footer-h2']}>Партнёрская программа</span>
                <span className={styles['footer-h2']}>Вакансии</span>
              </div>
            </div>
            <div className={styles['footer-column']}>
              <span className={styles['footer-h1']}>МЕНЮ</span>
              <div className={styles['footer-menu-wrapper']}>
                <div className={styles['footer-h2-wrapper']}>
                  <span className={styles['footer-h2']}>Расчёт стоимости</span>
                  <span className={styles['footer-h2']}>Услуги</span>
                  <span className={styles['footer-h2']}>Виджеты</span>
                  <span className={styles['footer-h2']}>Интеграции</span>
                  <span className={styles['footer-h2']}>Наши клиенты</span>
                </div>
                <div className={styles['footer-h2-wrapper']}>
                  <span className={styles['footer-h2']}>Кейсы</span>
                  <span className={styles['footer-h2']}>
                                        Благодарственные письма
                                    </span>
                  <span className={styles['footer-h2']}>Сертификаты</span>
                  <span className={styles['footer-h2']}>Блог на Youtube</span>
                  <span className={styles['footer-h2']}>Вопрос / Ответ</span>
                </div>
              </div>
            </div>
            <div className={styles['footer-column-right']}>
              <span className={styles['footer-h1']}>КОНТАКТЫ</span>
              <div className={styles['footer-h2-wrapper']}>
                <span className={styles['footer-h2']}>+7 555 555-55-55</span>
              </div>
              <div className={styles['footer-h2-wrapper']}>
                                <span className={styles['footer-h2']}>
                                    <div className={styles['footer-icons']}>
                                        <img
                                          alt=''
                                          src='/img/telegram-icon.png'
                                          className={styles['header-icon']}
                                        />
                                        <img
                                          alt=''
                                          src='/img/phone-icon.png'
                                          className={styles['header-icon']}
                                        />
                                        <img
                                          alt=''
                                          src='/img/whatsapp-icon.png'
                                          className={styles['header-icon']}
                                        />
                                    </div>
                                </span>
              </div>
              <div className={styles['footer-h2-wrapper']}>
                                <span className={styles['footer-h2']}>
                                    Москва, Путевой проезд 3с1, к 902
                                </span>
              </div>
            </div>
          </div>
          <div className={styles['footer-columns']}>
            <span>©WELBEX 2022. Все права защищены.</span>
            <br />
            <span className={styles['underline']}>Политика конфиденциальности.</span>
          </div>
        </div>
      </div>
      <div className={styles['ball-red']}></div>
      <div className={styles['ball-red-small']}></div>
      <div className={styles['ball-purple']} />
      <div className={styles['red-light']}></div>
      <div className={styles['red-light']} />
    </div>
  );
}

export default App;
