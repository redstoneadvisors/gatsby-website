import * as React from 'react';
import {Link} from 'gatsby';
import {Select, Option, SelectedOption, Picker} from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
	faChevronDown,
	faGlobeAmericas,
} from '@fortawesome/free-solid-svg-icons';

const LanguageSelector = ({page, language}) => {
	const supportedLanguages = [
		{
			code: 'default',
			path: '/',
			label: 'English',
		},
		{
			code: 'es',
			path: '/es',
			label: 'Español',
		},
		{
			code: 'de',
			path: '/de',
			label: 'Deutsch',
		},
		{
			code: 'fr',
			path: '/fr',
			label: 'Français',
		},
		{
			code: 'pl',
			path: '/pl',
			label: 'Polski',
		},
		{
			code: 'ja',
			path: '/ja',
			label: '日本語',
		},
		{
			code: 'zh-CN',
			path: '/zh-CN',
			label: '简体中文',
		},
		{
			code: 'ko',
			path: '/ko',
			label: '한국어',
		},
	];
	const [isOpen, setIsOpen] = React.useState(false);
	const selectedLang = supportedLanguages.filter(
		(obj) => obj.code === language
	);
	return (
		<div>
			{/* <select
				aria-label="select"
				onChange={(e) => changeLanguage(e.target.value)}
				value={selectedLang}>
				<option value="/de">Deutsch</option>
				<option value="/en">English</option>
				<option value="/es">Español</option>
				<option value="/fr">Français</option>
				<option value="/pl">Polski</option>
				<option value="/ja">日本語</option>
				<option value="/zh-CN">简体中文</option>
				<option value="/ko">한국어</option>
			</select> */}
			<Picker>
				<SelectedOption onClick={() => setIsOpen(!isOpen)}>
					<FontAwesomeIcon icon={faGlobeAmericas} />
					<span>{selectedLang[0].label}</span>
					<FontAwesomeIcon
						icon={faChevronDown}
						style={{marginLeft: 'auto'}}
					/>
				</SelectedOption>
				<Select aria-label="select" open={isOpen}>
					{supportedLanguages.map((lang, key) => {
						return lang.code !== 'default' ? (
							<Option
								key={key}
								data-value={lang.code}
								selected={lang.code === language}>
								<Link
									to={
										page !== 'home'
											? `${lang.path}/${page}`
											: lang.path
									}>
									{lang.label}
								</Link>
							</Option>
						) : (
							<Option
								key={key}
								data-value={lang.code}
								selected={lang.code === language}>
								<Link to={page !== 'home' ? `/${page}` : `/`}>
									{lang.label}
								</Link>
							</Option>
						);
					})}
				</Select>
			</Picker>
		</div>
	);
};

export default LanguageSelector;
