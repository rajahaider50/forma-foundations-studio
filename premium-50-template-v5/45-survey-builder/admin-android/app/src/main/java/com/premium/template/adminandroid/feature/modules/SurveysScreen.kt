package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun SurveysScreen(onCreate:()->Unit){Card{Column{Text("Surveys");Text("Domain-specific surveys workflow");Button(onClick=onCreate){Text("Create")}}}}
