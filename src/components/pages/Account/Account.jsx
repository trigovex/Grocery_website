import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLock, FaHistory, FaHeart, FaBell, FaCreditCard } from 'react-icons/fa';
import styles from './Account.module.css';

const Account = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+91 98765 43210",
    address: "123 Fresh Street, Mumbai, MH 400001",
    preferences: {
      newsletter: true,
      orderUpdates: true,
      promotions: false
    }
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...user });
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    setFormData({ ...user });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePreferenceChange = (e) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [name]: checked
      }
    }));
  };

  const handleSave = () => {
    setUser(formData);
    setIsEditing(false);
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    // Add password change logic here
    console.log('Password change requested');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  const renderProfileSection = () => (
    <div className={styles.section}>
      <h2>Profile Information</h2>
      {isEditing ? (
        <div className={styles.form}>
          <div className={styles.inputGroup}>
            <FaUser className={styles.inputIcon} />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className={styles.inputField}
            />
          </div>
          <div className={styles.inputGroup}>
            <FaEnvelope className={styles.inputIcon} />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={styles.inputField}
            />
          </div>
          <div className={styles.inputGroup}>
            <FaPhone className={styles.inputIcon} />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className={styles.inputField}
            />
          </div>
          <div className={styles.inputGroup}>
            <FaMapMarkerAlt className={styles.inputIcon} />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className={styles.inputField}
            />
          </div>
          <button className={styles.saveButton} onClick={handleSave}>
            Save Changes
          </button>
        </div>
      ) : (
        <div className={styles.profileInfo}>
          <div className={styles.infoItem}>
            <FaUser className={styles.infoIcon} />
            <div>
              <label>Name</label>
              <p>{user.name}</p>
            </div>
          </div>
          <div className={styles.infoItem}>
            <FaEnvelope className={styles.infoIcon} />
            <div>
              <label>Email</label>
              <p>{user.email}</p>
            </div>
          </div>
          <div className={styles.infoItem}>
            <FaPhone className={styles.infoIcon} />
            <div>
              <label>Phone</label>
              <p>{user.phone}</p>
            </div>
          </div>
          <div className={styles.infoItem}>
            <FaMapMarkerAlt className={styles.infoIcon} />
            <div>
              <label>Address</label>
              <p>{user.address}</p>
            </div>
          </div>
          <button className={styles.editButton} onClick={handleEditToggle}>
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );

  const renderSecuritySection = () => (
    <div className={styles.section}>
      <h2>Security Settings</h2>
      <form onSubmit={handlePasswordChange} className={styles.form}>
        <div className={styles.inputGroup}>
          <FaLock className={styles.inputIcon} />
          <input
            type="password"
            placeholder="Current Password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className={styles.inputField}
          />
        </div>
        <div className={styles.inputGroup}>
          <FaLock className={styles.inputIcon} />
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className={styles.inputField}
          />
        </div>
        <div className={styles.inputGroup}>
          <FaLock className={styles.inputIcon} />
          <input
            type="password"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={styles.inputField}
          />
        </div>
        <button type="submit" className={styles.saveButton}>
          Change Password
        </button>
      </form>
    </div>
  );

  const renderPreferencesSection = () => (
    <div className={styles.section}>
      <h2>Preferences</h2>
      <div className={styles.preferences}>
        <div className={styles.preferenceItem}>
          <label>
            <input
              type="checkbox"
              name="newsletter"
              checked={formData.preferences.newsletter}
              onChange={handlePreferenceChange}
            />
            <span>Receive Newsletter</span>
          </label>
          <p>Get updates about new products and offers</p>
        </div>
        <div className={styles.preferenceItem}>
          <label>
            <input
              type="checkbox"
              name="orderUpdates"
              checked={formData.preferences.orderUpdates}
              onChange={handlePreferenceChange}
            />
            <span>Order Updates</span>
          </label>
          <p>Receive notifications about your orders</p>
        </div>
        <div className={styles.preferenceItem}>
          <label>
            <input
              type="checkbox"
              name="promotions"
              checked={formData.preferences.promotions}
              onChange={handlePreferenceChange}
            />
            <span>Promotional Emails</span>
          </label>
          <p>Get special offers and promotions</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles.accountContainer}>
      <div className={styles.accountHeader}>
        <FaUser className={styles.headerIcon} />
        <div>
          <h1>Account Settings</h1>
          <p className={styles.subtitle}>Manage your account preferences and settings</p>
        </div>
      </div>

      <div className={styles.accountContent}>
        <div className={styles.sidebar}>
          <button
            className={`${styles.tabButton} ${activeTab === 'profile' ? styles.active : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            <FaUser /> Profile
          </button>
          <button
            className={`${styles.tabButton} ${activeTab === 'security' ? styles.active : ''}`}
            onClick={() => setActiveTab('security')}
          >
            <FaLock /> Security
          </button>
          <button
            className={`${styles.tabButton} ${activeTab === 'preferences' ? styles.active : ''}`}
            onClick={() => setActiveTab('preferences')}
          >
            <FaBell /> Preferences
          </button>
        </div>

        <div className={styles.mainContent}>
          {activeTab === 'profile' && renderProfileSection()}
          {activeTab === 'security' && renderSecuritySection()}
          {activeTab === 'preferences' && renderPreferencesSection()}
        </div>
      </div>
    </div>
  );
};

export default Account; 