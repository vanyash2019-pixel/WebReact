import React from 'react';

function CallbackSection() {
  return (
    <section className="callback-section">
      <div className="container">
        <div className="callback-wrapper">
          <div className="callback-content">
            <h3 className="callback-title">
              <span className="ru">Если у вас появилось желание оставить отзыв, то не ждите! Нам важно ваше мнение!</span>
              <span className="en">If you want to leave a review, don't wait! Your opinion matters to us!</span>
            </h3>
          </div>
          <div className="callback-action">
            <button type="button" className="callback-btn">
              <span className="ru">Написать отзыв</span>
              <span className="en">Leave a Review</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallbackSection;