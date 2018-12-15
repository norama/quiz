import React from 'react';
import { mount } from 'enzyme';

import { MemoryRouter } from 'react-router-dom';
import Contacts from '../../components/Contacts';
import ContactForm from '../../components/contacts/ContactForm';
import ContactCard from '../../components/contacts/ContactCard';

import { elements, containsElement } from '../TestUtils';

const EMPTY_FUNC = () => {};

const CONTACT1 = {
	id: '1',
	name: 'name1',
	email: 'name1@gmail.com',
	tel: '111'
};

const CONTACT2 = {
	id: '2',
	name: 'name2',
	email: 'name2@gmail.com',
	tel: '222'
};

describe('<Contacts />', () => {
	test('renders with empty contact list', () => {
		const wrapper = mount(
			<MemoryRouter>
				<Contacts onMount={EMPTY_FUNC} contacts={[]} onChangeContacts={EMPTY_FUNC} />
			</MemoryRouter>
		);

		expect(containsElement(wrapper, ContactForm)).toBe(true);
		expect(containsElement(wrapper, ContactCard)).toBe(false);
	});

	test('renders with contacts', () => {
		const wrapper = mount(
			<MemoryRouter>
				<Contacts onMount={EMPTY_FUNC} contacts={[CONTACT1, CONTACT2]} onChangeContacts={EMPTY_FUNC} />
			</MemoryRouter>
		);

		expect(elements(wrapper, ContactCard)).toHaveLength(2);
	});
});
