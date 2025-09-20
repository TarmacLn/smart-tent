import React, { useMemo, useState, useEffect } from "react";
import "./Catalogue.less";
import Header from "../../../components/Header";
import { useNavigate } from "react-router-dom";
import { Button, Divider, Grid, IconButton, Popover, FormGroup, FormControlLabel, Checkbox, Slider, Box, Tooltip } from "@mui/material";
import Basket from '../../../assets/Basket.svg';
import Left from '../../../assets/Left.svg';
import Right from '../../../assets/Right.svg';
import Team from '../../../assets/Team.svg';
import { MealEnum } from "../../../stores/types";
import FoodModal from "../../../components/FoodModal";
import { uiStore } from "../../../stores";

const foodItems = [
    {
        name: "Grilled Chicken Salad",
        description: "Fresh greens topped with grilled chicken, cherry tomatoes, cucumbers, and a light vinaigrette.",
        price: 12.99,
        meals: [MealEnum.Lunch, MealEnum.Dinner],
        vegetarian: false,
    },
    {
        name: "Veggie Wrap",
        description: "A whole wheat wrap filled with hummus, avocado, lettuce, tomato, cucumber, and shredded carrots.",
        price: 10.99,
        meals: [MealEnum.Breakfast, MealEnum.Lunch],
        vegetarian: true
    },
    {
        name: "Beef Stir-Fry",
        description: "Tender beef strips stir-fried with bell peppers, broccoli, and snap peas in a savory soy sauce.",
        price: 14.99,
        meals: [MealEnum.Dinner],
        vegetarian: false
    },
    {
        name: "Margherita Pizza",
        description: "Classic pizza topped with fresh mozzarella, tomatoes, basil, and a drizzle of olive oil.",
        price: 11.99,
        meals: [MealEnum.Lunch, MealEnum.Dinner],
        vegetarian: true
    },
    {
        name: "Pasta Primavera",
        description: "Penne pasta tossed with seasonal vegetables in a light garlic and olive oil sauce.",
        price: 13.99,
        meals: [MealEnum.Lunch, MealEnum.Dinner],
        vegetarian: true
    },
    {
        name: "Chicken Tacos",
        description: "Soft corn tortillas filled with seasoned grilled chicken, lettuce, cheese, and salsa.",
        price: 9.99,
        meals: [MealEnum.Breakfast, MealEnum.Lunch],
        vegetarian: false
    },
    {
        name: "Veggie Omelette",
        description: "Fluffy omelette filled with spinach, mushrooms, bell peppers, and cheese.",
        price: 8.99,
        meals: [MealEnum.Breakfast],
        vegetarian: true
    },
    {
        name: "Caesar Salad",
        description: "Crisp romaine lettuce tossed with Caesar dressing, croutons, and Parmesan cheese.",
        price: 10.49,
        meals: [MealEnum.Lunch, MealEnum.Dinner],
        vegetarian: true
    },
    {
        name: "BBQ Pulled Pork Sandwich",
        description: "Slow-cooked pulled pork in BBQ sauce served on a toasted bun with coleslaw.",
        price: 12.49,
        meals: [MealEnum.Lunch, MealEnum.Dinner],
        vegetarian: false
    },
    {
        name: "Quinoa Salad",
        description: "A healthy mix of quinoa, black beans, corn, avocado, and a lime-cilantro dressing.",
        price: 11.49,
        meals: [MealEnum.Lunch, MealEnum.Dinner],
        vegetarian: true
    },
    {
        name: "French Toast",
        description: "Thick slices of bread soaked in a cinnamon-vanilla batter, grilled to perfection and topped with syrup.",
        price: 9.49,
        meals: [MealEnum.Breakfast],
        vegetarian: true
    },
    {
        name: "Veggie Burger",
        description: "A delicious plant-based burger served with lettuce, tomato, and a side of sweet potato fries.",
        price: 13.49,
        meals: [MealEnum.Lunch, MealEnum.Dinner],
        vegetarian: true
    },
];

export default function Catalogue() {
    const navigate = useNavigate();
    const [page, setPage] = useState<number>(0);
    const itemsPerPage = 6;

    const [filtersAnchor, setFiltersAnchor] = useState<HTMLElement | null>(null);
    const [filters, setFilters] = useState({
        vegetarian: false,
        underPrice: false,
        maxPrice: 12,
        meals: {
            breakfast: true,
            lunch: true,
            dinner: true,
        }
    });
    const openFilters = Boolean(filtersAnchor);

    const openFiltersMenu = (e: React.MouseEvent<HTMLElement>) => setFiltersAnchor(e.currentTarget);
    const closeFiltersMenu = () => setFiltersAnchor(null);

    const filteredItems = useMemo(() => {
        return foodItems.filter((it) => {
            if (filters.vegetarian && !it.vegetarian) return false;
            if (filters.underPrice) {
                if (it.price > filters.maxPrice) return false;
            }
            const mealMatches = it.meals.some(m =>
                (m === MealEnum.Breakfast && filters.meals.breakfast) ||
                (m === MealEnum.Lunch && filters.meals.lunch) ||
                (m === MealEnum.Dinner && filters.meals.dinner)
            );
            if (!mealMatches) return false;
            return true;
        });
    }, [foodItems, filters]);

    useEffect(() => {
        setPage(0);
    }, [filters]);

    const totalPages = Math.max(1, Math.ceil(filteredItems.length / itemsPerPage));
    useEffect(() => {
        if (page > totalPages - 1) setPage(totalPages - 1);
    }, [page, totalPages]);

    const pagedItems = filteredItems.slice(page * itemsPerPage, (page + 1) * itemsPerPage);
    const leftItems = pagedItems.slice(0, Math.min(3, pagedItems.length));
    const rightItems = pagedItems.slice(leftItems.length, leftItems.length + 3);

    const [isVisible, setIsVisible] = useState(false);
    const [selectedFood, setSelectedFood] = useState(foodItems[0]);

    return (
        <div className="Catalogue">
            <FoodModal
                isVisible={isVisible}
                closeModal={() => setIsVisible(false)}
                food={selectedFood}
            />
            <Header
                title='Order Food'
                onClickBack={() => navigate('/menu')}
                color='black'
            />
            <div className="content" >
                <div className="book" >
                    <div className="left">
                        <div className="food-list">
                            {leftItems.map((item, index) => (
                                <div key={index} className="food-item">
                                    <Grid container spacing={2}>
                                        <Grid size={5}>
                                            <div className="item-image" />
                                        </Grid>
                                        <Grid size={7} className="item-content">
                                            <div className="item-name">{item.name}</div>
                                            <div className="item-description">{item.description}</div>
                                            <div className="item-price">{item.price}€</div>
                                            <div className="item-actions">
                                                <IconButton
                                                    onClick={() => {
                                                        setSelectedFood(item);
                                                        setIsVisible(true);
                                                    }}
                                                >
                                                    <Basket />
                                                </IconButton>
                                            </div>
                                        </Grid>
                                    </Grid>
                                    <Divider style={{ margin: '10px 0' }} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="right">
                        <div className="food-list">
                            {rightItems.map((item, index) => (
                                <div key={index} className="food-item">
                                    <Grid container spacing={2}>
                                        <Grid size={5}>
                                            <div className="item-image" />
                                        </Grid>
                                        <Grid size={7} className="item-content">
                                            <div className="item-name">{item.name}</div>
                                            <div className="item-description">{item.description}</div>
                                            <div className="item-price">{item.price}€</div>
                                            <div className="item-actions">
                                                <IconButton
                                                    onClick={() => {
                                                        setSelectedFood(item);
                                                        setIsVisible(true);
                                                    }}
                                                >
                                                    <Basket />
                                                </IconButton>
                                            </div>
                                        </Grid>
                                    </Grid>
                                    <Divider style={{ margin: '10px 0' }} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <Button
                        variant="contained"
                        color="info"
                        onClick={() => uiStore.setCurrentTab(2)}
                    >
                        <Team /> Message Us
                    </Button>
                    <div>
                        <Tooltip title="Previous page">
                            <span>
                                <IconButton
                                    size="small"
                                    onClick={() => setPage(p => Math.max(0, p - 1))}
                                    disabled={page <= 0}
                                >
                                    <Left />
                                </IconButton>
                            </span>
                        </Tooltip>

                        <Button variant="contained" color="error" onClick={openFiltersMenu} sx={{ mx: 1 }}>
                            Filters
                        </Button>

                        <Tooltip title="Next page">
                            <span>
                                <IconButton
                                    size="small"
                                    onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
                                    disabled={page >= totalPages - 1}
                                >
                                    <Right />
                                </IconButton>
                            </span>
                        </Tooltip>

                        <Popover
                            open={openFilters}
                            anchorEl={filtersAnchor}
                            onClose={closeFiltersMenu}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                        >
                            <Box className="filters">
                                <div className="title">Filters</div>
                                <Box sx={{ mt: 1 }}>
                                    <div className="subtitle">Meal types</div>
                                    <FormGroup row>
                                        <FormControlLabel
                                            control={<Checkbox checked={filters.meals.breakfast} onChange={() => setFilters(f => ({ ...f, meals: { ...f.meals, breakfast: !f.meals.breakfast } }))} />}
                                            label="Breakfast"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox checked={filters.meals.lunch} onChange={() => setFilters(f => ({ ...f, meals: { ...f.meals, lunch: !f.meals.lunch } }))} />}
                                            label="Lunch"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox checked={filters.meals.dinner} onChange={() => setFilters(f => ({ ...f, meals: { ...f.meals, dinner: !f.meals.dinner } }))} />}
                                            label="Dinner"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox checked={filters.vegetarian} onChange={() => setFilters(f => ({ ...f, vegetarian: !f.vegetarian }))} />}
                                            label="Vegetarian only"
                                        />
                                    </FormGroup>
                                </Box>

                                <Box sx={{ mt: 1 }}>
                                    <div className="subtitle">Max price</div>
                                    <Slider
                                        value={filters.maxPrice}
                                        min={5}
                                        max={25}
                                        step={1}
                                        onChange={(_, v) => setFilters(f => ({ ...f, maxPrice: Array.isArray(v) ? v[0] : v }))}
                                        valueLabelDisplay="auto"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={filters.underPrice} onChange={() => setFilters(f => ({ ...f, underPrice: !f.underPrice }))} />}
                                        label={`Under $${filters.maxPrice}`}
                                    />
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                                    <Button size="small" onClick={() => setFilters({ vegetarian: false, underPrice: false, maxPrice: 12, meals: { breakfast: true, lunch: true, dinner: true } })}>Reset</Button>
                                    <Button size="small" variant="contained" onClick={closeFiltersMenu}>Apply</Button>
                                </Box>
                            </Box>
                        </Popover>
                    </div>
                    <Button variant="contained" color="primary" onClick={() => uiStore.setCurrentTab(1)}>
                        Go to Basket
                    </Button>
                </div>
            </div>

        </div>
    );
}