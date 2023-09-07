// Function to restructure the form data
const transformFormData = (userId, formData) => {
    return {
      userId: userId,
      status: 'pending', // Set the status to 'pending' by default or as needed
      category:formData.category, // Add the category if it's available in formData
      createdAt: new Date(),
      updatedAt: null, // Initialize as null, it will be updated later if needed
      editBy: null, // Initialize as null, it will be updated later if needed
      details: {
        names: formData.names,
        demobNumber: formData.demobNumber,
        nationalIdentity: formData.nationalIdentity,
        dateAndPlaceOfIssue: new Date(), // You can set the date here if needed
        telephone: formData.telephone,
        sex: formData.sex,
        yearOfBirth: formData.yearOfBirth,
        yearOfFirstRecruitment: formData.yearOfFirstRecruitment,
        yearOfDemobilization: formData.yearOfDemobilization,
        phase: formData.phase,
        fathersNames: formData.fathersNames,
        mothersNames: formData.mothersNames,
        sourceOfLivelihood: formData.sourceOfLivelihood,
        maritalStatus: formData.maritalStatus,
        partner: {
          name: formData.partner.name,
          idNumber: formData.partner.idNumber,
          telephone: formData.partner.telephone,
        },
        numberOfChildren: formData.numberOfChildren,
        placeOfResidence: {
          village: formData.placeOfResidence.village,
          cell: formData.placeOfResidence.cell,
          sector: formData.placeOfResidence.sector,
          district: formData.placeOfResidence.district,
          province: formData.placeOfResidence.province,
        },
        educationLevel: formData.educationLevel,
        otherSkills: formData.otherSkills,
        vulnerabilityIndicators: {
          lackOfShelter: formData.vulnerabilityIndicators.lackOfShelter,
          landless: formData.vulnerabilityIndicators.landless,
          lackOfSkills: formData.vulnerabilityIndicators.lackOfSkills,
          disability: formData.vulnerabilityIndicators.disability,
          totalScore: formData.vulnerabilityIndicators.totalScore,
        },
        plannedProject: formData.plannedProject,
        applicantSignature: formData.applicantSignature,
        recommendations: formData.recommendations,
        approvalAuthorities: {
          sectorExecutiveSecretary: {
            name: formData.approvalAuthorities.sectorExecutiveSecretary.name,
            date: formData.approvalAuthorities.sectorExecutiveSecretary.date,
            telphone: formData.approvalAuthorities.sectorExecutiveSecretary.telphone,
          },
          socialAffairsOfficer: {
            name: formData.approvalAuthorities.socialAffairsOfficer.name,
            date: formData.approvalAuthorities.socialAffairsOfficer.date,
            telphone: formData.approvalAuthorities.socialAffairsOfficer.telphone,
          },
          personOfIntegrity: {
            name: formData.approvalAuthorities.personOfIntegrity.name,
            date: formData.approvalAuthorities.personOfIntegrity.date,
            telphone: formData.approvalAuthorities.personOfIntegrity.telphone,
          },
          exCombatantRepresentatives: formData.approvalAuthorities.exCombatantRepresentatives.map(
            (representative) => ({
              name: representative.name,
              date: representative.date,
              telphone: representative.telphone,
            })
          ),
          provincialReintegrationOfficer: {
            name: formData.approvalAuthorities.provincialReintegrationOfficer.name,
            date: formData.approvalAuthorities.provincialReintegrationOfficer.date,
            telphone: formData.approvalAuthorities.provincialReintegrationOfficer.telphone,
            district: formData.approvalAuthorities.provincialReintegrationOfficer.district,
          },
          rdrpTechSecretariatResolution: {
            name: formData.approvalAuthorities.rdrpTechSecretariatResolution.name,
            date: formData.approvalAuthorities.rdrpTechSecretariatResolution.date,
            resolution: formData.approvalAuthorities.rdrpTechSecretariatResolution.resolution,
            position: formData.approvalAuthorities.rdrpTechSecretariatResolution.position,
          },
        },
      },
    };
  };
  
  export default transformFormData;