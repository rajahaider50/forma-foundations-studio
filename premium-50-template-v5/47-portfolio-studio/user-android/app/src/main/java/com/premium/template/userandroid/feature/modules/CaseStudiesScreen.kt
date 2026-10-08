package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun CaseStudiesScreen(onCreate:()->Unit){Card{Column{Text("CaseStudies");Text("Domain-specific case-studies workflow");Button(onClick=onCreate){Text("Create")}}}}
