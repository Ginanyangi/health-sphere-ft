import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BASE_URL from '../../config';



const ContactMessages = () => {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/accounts/contact/`);
        setMessages(response.data);
      } catch (error) {
        setError('Error fetching contact messages.');
        console.error('Error fetching contact messages:', error);
      }
    };

    fetchMessages();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold mb-4 text-gray-900">Contact Messages</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-gray-600 text-sm leading-normal">
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Email</th>
            <th className="py-3 px-6 text-left">Message</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message) => (
            <tr key={message.id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left">{message.name}</td>
              <td className="py-3 px-6 text-left">{message.email}</td>
              <td className="py-3 px-6 text-left">{message.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default ContactMessages;
