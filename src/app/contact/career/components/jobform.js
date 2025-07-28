'use client';
import {
    Button,
    TextInput,
    Textarea,
    FileInput,
    Space,
    Select,
    Box,
} from '@mantine/core';
import { useForm, Controller } from 'react-hook-form';

export default function JobApplicationForm() {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            experience: '',
            description: '',
            resume: null,
            work: null,
        },
    });

    const onSubmit = (data) => {
        console.log('Form submitted', data);
    };

    // Common styles for text inputs
    const inputStyles = {
        input: {
            padding: '12px',
            borderRadius: '6px',
            height: '46px'
        },
        label: {
            marginBottom: '8px',
            textAlign: 'left',
            width: '100%',
            fontWeight: 'normal',
            fontSize: '16px'
        },
        root: {
            width: '100%'
        },
        error: {
            textAlign: 'left',
            paddingLeft: '0',
            marginTop: '4px',
            fontSize: '14px'
        }
    };

    return (
        <div className="py-8 mx-auto px-4">
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Name fields in a row */}
                <div className="flex flex-col md:flex-row gap-6 mb-4">
                    <div className="flex-1">
                        <Controller
                            name="firstName"
                            control={control}
                            rules={{ required: 'First name is required' }}
                            render={({ field }) => (
                                <TextInput
                                    label="First name"
                                    placeholder="First name"
                                    error={errors.firstName?.message}
                                    styles={inputStyles}
                                    {...field}
                                />
                            )}
                        />
                    </div>

                    <div className="flex-1">
                        <Controller
                            name="lastName"
                            control={control}
                            rules={{ required: 'Last name is required' }}
                            render={({ field }) => (
                                <TextInput
                                    label="Last name"
                                    placeholder="Last name"
                                    error={errors.lastName?.message}
                                    styles={inputStyles}
                                    {...field}
                                />
                            )}
                        />
                    </div>
                </div>

                {/* Email field */}
                <div className="mb-4">
                    <Controller
                        name="email"
                        control={control}
                        rules={{
                            required: 'Email is required',
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: 'Invalid email address',
                            },
                        }}
                        render={({ field }) => (
                            <TextInput
                                label="Email"
                                placeholder="you@company.com"
                                error={errors.email?.message}
                                styles={inputStyles}
                                {...field}
                            />
                        )}
                    />
                </div>

                {/* Phone number field */}
                <div className="mb-4">
                    <label className="block text-[16px] text-start font-normal mb-2">Phone number</label>
                    <div className="flex">
                        <Select
                            data={[ { value: 'INR', label: 'INR' } ]}
                            defaultValue="INR"
                            styles={{
                                input: {
                                    borderTopRightRadius: 0,
                                    borderBottomRightRadius: 0,
                                    paddingRight: '8px',
                                    paddingLeft: '8px',
                                    minWidth: '80px',
                                    height: '46px'
                                },
                                dropdown: {
                                    zIndex: 100
                                }
                            }}
                        />
                        <Controller
                            name="phone"
                            control={control}
                            rules={{ required: 'Phone number is required' }}
                            render={({ field }) => (
                                <TextInput
                                    placeholder="+1 (555) 000-0000"
                                    error={false} // Hide Mantine's default error display
                                    styles={{
                                        input: {
                                            borderTopLeftRadius: 0,
                                            borderBottomLeftRadius: 0,
                                            borderLeft: 0,
                                            padding: '12px',
                                            height: '46px'
                                        },
                                        root: { flex: 1 },
                                    }}
                                    {...field}
                                />
                            )}
                        />
                    </div>
                    {errors.phone && (
                        <p className="text-red-500 text-sm mt-1 text-left">{errors.phone.message}</p>
                    )}
                </div>

                {/* Experience field */}
                <div className="mb-4">
                    <Controller
                        name="experience"
                        control={control}
                        rules={{ required: 'Experience is required' }}
                        render={({ field }) => (
                            <TextInput
                                label="Total number of Experience"
                                placeholder="Enter text"
                                error={errors.experience?.message}
                                styles={inputStyles}
                                {...field}
                                type='number'
                            />
                        )}
                    />
                </div>

                {/* Description field */}
                <div className="mb-4">
                    <Controller
                        name="description"
                        control={control}
                        render={({ field }) => (
                            <Textarea
                                label="Description"
                                minRows={6}
                                error={errors.description?.message}
                                styles={{
                                    ...inputStyles,
                                    input: {
                                        padding: '12px',
                                        borderRadius: '6px',
                                        minHeight: '120px'
                                    }
                                }}
                                {...field}
                            />
                        )}
                    />
                </div>

                {/* Resume upload */}
                <div className="mb-4">
                    <Controller
                        name="resume"
                        control={control}
                        rules={{ required: 'Resume is required' }}
                        render={({ field: { onChange, value, ...rest } }) => (
                            <>
                                <FileInput
                                    label="Upload Resume"
                                    placeholder="Upload"
                                    accept=".pdf,.docx"
                                    onChange={onChange}
                                    value={value}
                                    error={errors.resume?.message}
                                    styles={inputStyles}
                                    {...rest}
                                />
                            </>
                        )}
                    />
                </div>

                {/* Work samples upload */}
                <div className="mb-8">
                    <Controller
                        name="work"
                        control={control}

                        render={({ field: { onChange, value, ...rest } }) => (
                            <FileInput
                                label="Upload Portfolio"
                                placeholder="Upload"
                                accept=".pdf,.zip,.jpg,.png"
                                onChange={onChange}
                                value={value}
                                error={errors.work?.message}
                                styles={inputStyles}
                                {...rest}
                            />
                        )}
                    />
                </div>

                {/* Submit button */}
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                        type="submit"
                        color="orange"
                        size="md"
                        radius="md"
                        sx={{
                            minWidth: 200,
                            padding: '12px 24px',
                            backgroundColor: '#FF8A00',
                            '&:hover': {
                                backgroundColor: '#E67A00',
                            }
                        }}
                    >
                        SUBMIT APPLICATION
                    </Button>
                </Box>
            </form>
        </div>
    );
}