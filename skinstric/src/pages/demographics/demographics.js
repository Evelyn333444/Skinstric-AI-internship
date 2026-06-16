import React, { useEffect, useMemo, useState } from 'react'
import AnalysisHeader from 'assets/analysisHeader.svg'
import BackButton from 'assets/backbutton.svg'
import Reset from 'assets/reset.svg'
import Confirm from 'assets/confirm.svg'
import './demographics.css'
import PercentCircle from '../../components/percentCircle/percentCircle'
import {
  SKINSTRIC_USER_NAME_KEY,
  SKINSTRIC_USER_LOCATION_KEY,
  SKINSTRIC_CONFIRMED_PHOTO_KEY,
} from '../introduction/introduce'

const PHASE_TWO_API = 'https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseTwo';
const TYPE_CLASSES = ['type-1', 'type-2', 'type-3', 'type-4', 'type-5', 'type-6', 'type-7'];

const formatLabel = (label) => label.toUpperCase();

const parsePredictions = (predictions) => {
  if (!predictions) {
    return [];
  }

  return Object.entries(predictions)
    .map(([label, score]) => ({
      label: formatLabel(label),
      percentage: Math.round(score * 100),
    }))
    .sort((a, b) => b.percentage - a.percentage);
};

function Demographics({ onResetClick, onBackClick, onConfirmClick, userName, userLocation, confirmedPhoto }) {
  const displayName = userName || sessionStorage.getItem(SKINSTRIC_USER_NAME_KEY) || '';
  const displayLocation = userLocation || sessionStorage.getItem(SKINSTRIC_USER_LOCATION_KEY) || '';
  const photoForAnalysis = confirmedPhoto || sessionStorage.getItem(SKINSTRIC_CONFIRMED_PHOTO_KEY) || '';

  const [analysis, setAnalysis] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [activeCategory, setActiveCategory] = useState('race');
  const [selectedValues, setSelectedValues] = useState({
    race: '',
    age: '',
    gender: '',
  });

  const racePredictions = useMemo(
    () => parsePredictions(analysis?.race),
    [analysis]
  );
  const agePredictions = useMemo(
    () => parsePredictions(analysis?.age),
    [analysis]
  );
  const genderPredictions = useMemo(
    () => parsePredictions(analysis?.gender),
    [analysis]
  );

  const predictionsByCategory = {
    race: racePredictions,
    age: agePredictions,
    gender: genderPredictions,
  };

  const activePredictions = predictionsByCategory[activeCategory] || [];
  const selectedValue = selectedValues[activeCategory] || activePredictions[0]?.label || '';
  const selectedPrediction = activePredictions.find((item) => item.label === selectedValue)
    || activePredictions[0]
    || { label: 'N/A', percentage: 0 };

  useEffect(() => {
    if (!photoForAnalysis) {
      setError('No photo provided for analysis.');
      return;
    }

    let isMounted = true;

    const fetchAnalysis = async () => {
      setIsLoading(true);
      setError('');

      try {
        const response = await fetch(PHASE_TWO_API, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ image: photoForAnalysis }),
        });

        const data = await response.json();

        if (!isMounted) {
          return;
        }

        if (!response.ok || !data.success || !data.data) {
          setError(data.message || 'Unable to analyze photo.');
          setAnalysis(null);
          return;
        }

        const nextAnalysis = data.data;
        setAnalysis(nextAnalysis);

        const nextRace = parsePredictions(nextAnalysis.race);
        const nextAge = parsePredictions(nextAnalysis.age);
        const nextGender = parsePredictions(nextAnalysis.gender);

        setSelectedValues({
          race: nextRace[0]?.label || '',
          age: nextAge[0]?.label || '',
          gender: nextGender[0]?.label || '',
        });
      } catch {
        if (isMounted) {
          setError('Network error. Please try again.');
          setAnalysis(null);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchAnalysis();

    return () => {
      isMounted = false;
    };
  }, [photoForAnalysis]);

  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
    }
  };

  const handleResetClick = () => {
    if (!analysis) {
      if (onResetClick) {
        onResetClick();
      }
      return;
    }

    const nextRace = parsePredictions(analysis.race);
    const nextAge = parsePredictions(analysis.age);
    const nextGender = parsePredictions(analysis.gender);

    setSelectedValues({
      race: nextRace[0]?.label || '',
      age: nextAge[0]?.label || '',
      gender: nextGender[0]?.label || '',
    });
    setActiveCategory('race');

    if (onResetClick) {
      onResetClick();
    }
  };

  const handleConfirmClick = () => {
    if (onConfirmClick) {
      onConfirmClick();
    }
  };

  const handleCategorySelect = (category) => {
    setActiveCategory(category);
  };

  const handlePredictionSelect = (label) => {
    setSelectedValues((current) => ({
      ...current,
      [activeCategory]: label,
    }));
  };

  const getTopLabel = (category) => {
    const selected = selectedValues[category];
    if (selected) {
      return selected;
    }

    return predictionsByCategory[category][0]?.label || 'N/A';
  };

  const resultsLabel = activeCategory === 'race'
    ? 'Type of Race'
    : activeCategory === 'age'
      ? 'Age Range'
      : 'Sex';

  return (
    <div>
      <header>
        <div className="header-left">
          <img src={AnalysisHeader} alt="" />
        </div>
      </header>
      <main>
        <div className="body-left">
          <div className="body-left-bold">
            <span className="body-left-bold-text">A.I. ANALYSIS</span>
          </div>
          <div className="body-left-big-bold">
            <span className="body-left-big-bold-text">DEMOGRAPHICS</span>
          </div>
          <div className="body-left-no-bold">
            <span className="body-left-no-bold-text">PREDICTED RACE AND AGE</span>
          </div>
          {(displayName || displayLocation) && (
            <div className="body-left-user-credentials">
              {displayName && (
                <span className="body-left-user-name">NAME: {displayName.toUpperCase()}</span>
              )}
              {displayLocation && (
                <span className="body-left-user-location">FROM: {displayLocation.toUpperCase()}</span>
              )}
            </div>
          )}
          {isLoading && (
            <span className="demographics-status">Analyzing photo...</span>
          )}
          {error && (
            <span className="demographics-status demographics-status-error">{error}</span>
          )}
        </div>
        <div className="body-center">
          <div className="sidebar-buttons">
            <div className="demographics-buttons-left">
              <span className="sidebar-prediction">{getTopLabel('race')}</span>
              <button
                type="button"
                className={`race ${activeCategory === 'race' ? 'is-active' : ''}`}
                onClick={() => handleCategorySelect('race')}
              >
                RACE
              </button>
            </div>
            <div className="age-button-left">
              <span className="sidebar-prediction">{getTopLabel('age')}</span>
              <button
                type="button"
                className={`age-button ${activeCategory === 'age' ? 'is-active' : ''}`}
                onClick={() => handleCategorySelect('age')}
              >
                AGE
              </button>
            </div>
            <div className="gender-button-left">
              <span className="sidebar-prediction">{getTopLabel('gender')}</span>
              <button
                type="button"
                className={`gender-button ${activeCategory === 'gender' ? 'is-active' : ''}`}
                onClick={() => handleCategorySelect('gender')}
              >
                SEX
              </button>
            </div>
          </div>
          <div className="results-box">
            <span className="type-race">{resultsLabel}</span>
            <span className="type-race-value">{selectedPrediction.label}</span>
          </div>
          <PercentCircle percentage={selectedPrediction.percentage} />
          <div className="ai-confidence-percent-box">
            <div className="ai-confidence">
              <span className="title-row-text">A.I. CONFIDENCE</span>
            </div>
            <div className="types">
              {activePredictions.slice(0, 7).map((item, index) => (
                <button
                  type="button"
                  key={`${activeCategory}-${item.label}`}
                  className={`${TYPE_CLASSES[index] || 'type-7'} demographics-type-row ${
                    selectedPrediction.label === item.label ? 'is-selected' : ''
                  }`}
                  onClick={() => handlePredictionSelect(item.label)}
                >
                  <span className={`${TYPE_CLASSES[index] || 'type-7'}-classification`}>
                    {activeCategory.toUpperCase()} #{index + 1}: {item.label}
                  </span>
                  <span className={`${TYPE_CLASSES[index] || 'type-7'}-percentage`}>
                    {item.percentage}%
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
      <footer className="demographics-footer">
        <button className="back-button" onClick={handleBackClick}>
          <img src={BackButton} alt="" />
        </button>
        <span className="back-button-text">Back</span>
        <div className="footer-text-layout">
          <span className="footer-text">If A.I estimate is wrong, select the correct one</span>
        </div>
        <div className="demographics-footer-actions">
          <button type="button" className="reset-button" onClick={handleResetClick}>
            <img src={Reset} alt="Reset" />
          </button>
          <button type="button" className="confirm-button" onClick={handleConfirmClick}>
            <img src={Confirm} alt="Confirm" />
          </button>
        </div>
      </footer>
    </div>
  )
}

export default Demographics
