
import React, { useState, useEffect } from 'react';
import { ViewState } from './types';
import PublicLayout from './components/PublicLayout';
import Home from './views/Home';
import QuoteFlow from './views/QuoteFlow';
import Results from './views/Results';
import QuoteSuccessOutOfHours from './views/QuoteSuccessOutOfHours';
import NotFound from './views/NotFound';
import WhatsAppButton from './components/WhatsAppButton';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('HOME');
  const [quoteData, setQuoteData] = useState<any>({});
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toUpperCase();
      if (hash && hash !== view) {
        if (hash === '') setView('HOME');
        else if (['HOME', 'QUOTE_STEP_1', 'QUOTE_RESULTS'].includes(hash)) {
          setView(hash as ViewState);
        }
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [view]);

  const navigate = (newView: ViewState) => {
    setView(newView);
    window.location.hash = newView.toLowerCase();
    window.scrollTo(0, 0);
  };

  const toggleFavorite = (id: string) => {
    setFavorites(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);
  };

  const renderView = () => {
    switch (view) {
      case 'HOME':
        return <Home onStartQuote={() => navigate('QUOTE_STEP_1')} />;
      case 'QUOTE_STEP_1':
      case 'QUOTE_STEP_2':
      case 'QUOTE_STEP_3':
      case 'QUOTE_STEP_4':
      case 'QUOTE_PROCESSING':
        return <QuoteFlow currentStep={view} navigate={navigate} setQuoteData={setQuoteData} quoteData={quoteData} />;
      case 'QUOTE_SUCCESS':
        return <QuoteFlow currentStep={'QUOTE_SUCCESS'} navigate={navigate} setQuoteData={setQuoteData} quoteData={quoteData} />;
      case 'QUOTE_SUCCESS_OUT_OF_HOURS':
        return <QuoteSuccessOutOfHours onHome={() => navigate('HOME')} />;
      case 'QUOTE_RESULTS':
        return <Results favorites={favorites} onToggleFavorite={toggleFavorite} onCompare={() => navigate('HOME')} navigate={navigate} />;
      case 'NOT_FOUND':
        return <NotFound onHome={() => navigate('HOME')} onQuote={() => navigate('QUOTE_STEP_1')} />;
      default:
        return <NotFound onHome={() => navigate('HOME')} onQuote={() => navigate('QUOTE_STEP_1')} />;
    }
  };

  const isPublicView = !view.startsWith('ADMIN');

  return (
    <PublicLayout currentView={view} navigate={navigate}>
      {renderView()}
      {isPublicView && (
        <>
          <AIAssistant />
          <WhatsAppButton />
        </>
      )}
    </PublicLayout>
  );
};

export default App;
