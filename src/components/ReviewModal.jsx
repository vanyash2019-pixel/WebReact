import React from 'react';

function ReviewModal() {
  return (
    <div
      className="modal-overlay"
      style={{
        display: 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.6)',
        zIndex: 9999,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="modal-content" style={{ background: '#fff', padding: '30px', borderRadius: '8px', maxWidth: '500px', width: '90%', position: 'relative' }}>
        <span style={{ position: 'absolute', top: '15px', right: '20px', fontSize: '24px', cursor: 'pointer', color: '#999' }}>&times;</span>
        <h3 style={{ marginTop: 0, marginBottom: '20px', fontSize: '22px', color: '#333' }}>
          <span className="ru">Оставить отзыв</span>
          <span className="en">Leave a Review</span>
        </h3>
        <form>
          <input
            type="text"
            placeholder="Ваше имя"
            style={{ width: '100%', padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
          />
          <textarea
            placeholder="Напишите ваш отзыв здесь..."
            style={{ width: '100%', height: '150px', padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '4px', resize: 'vertical', boxSizing: 'border-box', fontFamily: 'inherit' }}
          ></textarea>
          <button
            type="submit"
            style={{ width: '100%', padding: '12px', background: '#cc0000', color: '#fff', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px' }}
          >
            <span className="ru">Отправить отзыв</span>
            <span className="en">Send Review</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default ReviewModal;