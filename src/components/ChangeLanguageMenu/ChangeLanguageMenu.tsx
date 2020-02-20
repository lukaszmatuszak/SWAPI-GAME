import React, { ChangeEvent, useState } from 'react';
import {
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const ChangeLanguageMenu: React.FC = () => {
    const { i18n } = useTranslation();
    const [selectedLng, setSelectedLng] = useState(i18n.language);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSelectedLng(event.target.value);
        i18n.changeLanguage(event.target.value);
    };

    return (
        <FormControl component="fieldset">
            <RadioGroup
                aria-label="position"
                name="position"
                value={selectedLng}
                onChange={handleChange}
                row
            >
                <FormControlLabel
                    value="en"
                    control={<Radio />}
                    label="English"
                    labelPlacement="start"
                />
                <FormControlLabel
                    value="pl"
                    control={<Radio />}
                    label="Polish"
                    labelPlacement="start"
                />
            </RadioGroup>
        </FormControl>
    );
};

export default ChangeLanguageMenu;
